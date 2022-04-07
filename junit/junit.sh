#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
		cd /home/coder/project/workspace/springapp/;
		mvn clean test;
    else
        echo "BE_Add_Compliant FAILED";
        echo "BE_Get_Compliant FAILED";
        echo "BE_Update_Compliant FAILED";
		echo "BE_GET_OpenStatus FAILED";
    fi
else
	echo "BE_Add_Compliant FAILED";
	echo "BE_Get_Compliant FAILED";
	echo "BE_Update_Compliant FAILED";
	echo "BE_GET_OpenStatus FAILED";
fi