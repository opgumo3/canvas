const canvas = document.getElementById("curtain");
const ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

function makeCurtain() {
    const backgroundColor = document.getElementById("background-color").value;
    const contents = document.getElementById("contents").value;
    const fontColor = document.getElementById("font-color").value;
    const font = document.getElementById("font").value;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "40px Arial";
    ctx.fillStyle = fontColor;
    ctx.textAlign = 'center';
    //ctx.textBaseline = 'middle';
    ctx.fillText(contents, canvas.width / 2, canvas.height / 2);
}