FROM mysql:8.0

# Root credentials
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=testdb

# Create a non-root user for the app
ENV MYSQL_USER=appuser
ENV MYSQL_PASSWORD=appuserpass

# Initialize database
COPY init.sql /docker-entrypoint-initdb.d/

