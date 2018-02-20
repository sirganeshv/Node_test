#include <mysql.h>
#include<stdio.h>
#include<iostream>
using namespace std;
MYSQL_RES *result;
MYSQL *con;
MYSQL_ROW row;
MYSQL_FIELD *field;

//Display the error message and exit
void finish_with_error(MYSQL *con)
{
  fprintf(stderr, "%s\n", mysql_error(con));
  mysql_close(con);
  exit(1);        
}

//Initializes connection to DB
void init_db() {
	con = mysql_init(NULL);
	if (con == NULL) {
      fprintf(stderr, "%s\n", mysql_error(con));
      exit(1);
	}
	if (mysql_real_connect(con, "localhost", "root", "","testdb", 0, NULL, 0) == NULL) {
      finish_with_error(con);
  }  
}

//Closes connection with DB
void close_db() {
	mysql_close(con);
}

void insert(int id){
	char query[150];
	sprintf(query,"INSERT INTO testtable VALUES(%d)",id);
	if (mysql_query(con,query)){
      finish_with_error(con);
	}
}