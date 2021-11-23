# EXPRESSAPI



## Description
<br>

Simple node.js express api product name stock an created time post and get property api 

<br>

## Project install and run

<br>

<code>npm install </code>
<br>

<code>npm run dev </code>

<br>


## Project Test 
<br>
Postman tool and web api testing 
<br>
<br>
<br>
<hr>

Request get path url sucess return json  http://localhost:3000/stocks
<hr>

<code>

```
{
    "code": 0,
    "msg": "sucess",
    "data": [
        {
            "_id": "619c25d80f0f7ae8654db9bd",
            "name": "Meta",
            "stock": 11,
            "__v": 0,
            "created_date": "2021-11-23T00:49:10.963Z"
        },
      }

```

</code>



<br>
<br>
<br>
<hr>

Request post path url sucess return json  http://localhost:3000/stocks
<hr>

<code>

```
{
    "code": 0,
    "msg": "sucess",
    "data": {
        "name": "Versesss",
        "stock": 19,
        "_id": "619c3a81d064a882165b9d0c",
        "created_date": "2021-11-23T00:49:05.923Z",
        "__v": 0
    }
}

```

</code>
<br><br>
<hr>
body pasted code 
<hr>

```
{

 "name":"Versesss",
 "stock":19

}

```
<br>

<p style="color:red">Share link to the collection</p>

https://go.postman.co/workspace/My-Workspace~9597e1b2-5ee3-4b4a-808b-56f59e64cda7/collection/12537687-dcae4fd1-8e9e-452a-a6f6-220622efd80b