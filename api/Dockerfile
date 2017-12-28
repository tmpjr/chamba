FROM debian:latest
RUN apt-get update
RUN apt-get install -y build-essential libpq-dev libgmp-dev git wget curl vim

WORKDIR /usr/local/bin
RUN wget https://github.com/begriffs/postgrest/releases/download/v0.4.3.0/postgrest-v0.4.3.0-ubuntu.tar.xz 
RUN cd /usr/local/bin && tar xfJ postgrest-v0.4.3.0-ubuntu.tar.xz
ADD postgrest.conf /etc/postgrest.conf

CMD exec /usr/local/bin/postgrest /etc/postgrest.conf

EXPOSE 3000
