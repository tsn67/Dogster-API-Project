var link1 = null;
var link2 = null;
var link3 = null;

$("button").click(function() { 
    const url = "http://localhost:3000/invoke-function";
    
    console.log($(this).text());
    const obj = {
        msg: $(this).text()
    }
    axios.post(url, obj)
        .then(response => {
            link1 = response.data.link1;
            link2 = response.data.link2;
            link3 = response.data.link3;
            console.log(link1);
            $(".img1").attr("src", link1);
            $(".img2").attr("src", link2);
            $(".img3").attr("src", link3);
        })
        .catch(error => {
            console.error(error);
        });
});
