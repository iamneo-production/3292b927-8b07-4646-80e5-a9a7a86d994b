package com.addissuepage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CreatingissuepageApplication {

	public static void main(String[] args) {
		SpringApplication.run(CreatingissuepageApplication.class, args);
	}
	
	 @Override
	    public void run(String... args) throws Exception
	    {
	        // Inserting the data in the mysql table.
	        InputIssue first = new InputIssue(1, "Aayush");
	        // ob.save() method
	        ob.save(first);
	    }

}
