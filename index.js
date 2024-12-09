import express from "express"
import bp from "body-parser"
import axios from "axios"

const port = 3000;
const app = express();

app.use(bp.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

app.listen(port, ()=> {
    console.log("Server started at port:"+port);
});

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        //console.log(response.data.message);
        const keys = Object.keys(response.data.message);
        const values = Object.values(response.data.message);
        var arr = [];
        let length = 20;
        let index = 0;
        for(let i = 0;i < length;i++) {
            while(true) {
                if(values[index].length > 0) {
                    arr.push(keys[index]);
                    index++;
                    break;
                } else index++;
            }
        }
        console.log(arr);
    } catch(error) {
        console.log(error);
    }
    var obj = {
        length: 20,
        array: arr
    }

    res.render("index.ejs", {obj});
});

app.post('/invoke-function', async (req, res) => {
    console.log(req.body.msg);
    const url = `https://dog.ceo/api/breed/${req.body.msg}/images`;
    const response = await axios.get(url);
    const arr = [];
    arr.push(response.data.message[0]);
    arr.push(response.data.message[1]);
    arr.push(response.data.message[2]);
    console.log(arr);

    res.send(
        {
            link1: arr[0],
            link2: arr[1],
            link3: arr[2],
        }
    );
});
  