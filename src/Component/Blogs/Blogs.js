import React from 'react';

const Blogs = () => {
    return (
        <div className='my-5'>
            <h1 className='title1 text-center my-5'>Question & Answer</h1>

            <div className="accordion container" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between javascript and nodejs.
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            JavaScript is a programming language, that runs in web browsers. Whereas Node.js is an interpreter or running atmosphere for JavaScript, that holds loads of requiring libraries and every one. JavaScript is essentially one customary process programming language; it will run any browser with a default browser running atmosphere. it's a awfully sturdy language unremarkably used for an internet application on any verification or any specific business logic. we'd like to append within the screen while not page refreshing. JavaScript additionally helps to use mythical being at any time, that helps North American nation decision any server-side script for given dynamic knowledge based on the necessity. It additionally helps with generating dynamic hypertext markup language tables based on business demand. JQuery is one in all the popular libraries to create comfy use of JavaScript by avoiding to write down loads of code.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            When should you use nodejs and when should you use mongodb?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            MongoDB is the Document oriented database. MongoDB stores a great deal of information in JSON format. MongoDB's performance is far quicker than any RDBMS. MongoDB is intended to figure with massive Scale knowledge. MongoDB will work on multiple servers. MongoDB will handle a large variety of access requests simply. There are a pair of style patterns in programming. One is asynchronous programming and therefore the different is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it doesn't anticipate a task to be completed. within the meanwhile, NodeJS started another job. That’s why we tend to use nodeJS.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Differences between sql and nosql databases.                        </button>
                    </h2>
                    {/* <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.
                            Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.
                            SQL databases are vertically scalable while NoSQL databases are horizontally scalable.
                            SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.
                            Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Blogs;