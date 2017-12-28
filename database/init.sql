CREATE SCHEMA api;

CREATE TABLE api.todos (
  id serial primary key,
  done boolean not null default false,
  task text not null,
  due timestamptz
);

INSERT INTO api.todos (task) VALUES
  ('finish tutorial 0'), ('pat self on back');

CREATE ROLE web_anon nologin;
GRANT web_anon to postgres;

GRANT USAGE ON SCHEMA api TO web_anon;
GRANT SELECT ON api.todos TO web_anon;

create role todo_user nologin;
grant todo_user to postgres;

grant usage on schema api to todo_user;
grant all on api.todos to todo_user;
grant usage, select on sequence api.todos_id_seq to todo_user;

create schema auth;
grant usage on schema auth to web_anon, todo_user;

create or replace function auth.check_token() returns void
  language plpgsql
  as $$
begin
  if current_setting('request.jwt.claim.email', true) =
     'disgruntled@mycompany.com' then
    raise insufficient_privilege
      using hint = 'Nope, we are on to you';
  end if;
end
$$;
