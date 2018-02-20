{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "hello.cpp" ]
    },
	{
	  "target_name": "webaddon",
      "sources": [ "web.cpp" ]
	},
	{
	  "target_name": "dbaddon",
	  "sources": ["db_test.cpp","db.h"],
	  "include_dirs": [
            "C:/Users/ganesh-pt1936/Downloads/mysql-connector-c-6.1.11-winx64/include" ,"E:/Node_test"
      ],
	  "libraries": [
            "C:/Users/ganesh-pt1936/Downloads/mysql-connector-c-6.1.11-winx64/lib/libmysql",
          ],
	  "cflags": [ "-std=c++14" ],
	}
  ]
}
