FROM nginx:latest
RUN apt-get update
RUN apt-get install -y build-essential git wget curl vim procps

# Install Node
WORKDIR /tmp
RUN curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh 
RUN apt-get update && apt-get install -y nodejs

RUN npm install -g webpack cross-env

#ADD . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
