function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
  
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");
    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");
    let lampu11 = document.getElementById("lampu11");
  
    if (toggle1.checked) {
      lampu1.src = "assets/images/on.gif"
      lampu2.src = "assets/images/on.gif"
      lampu3.src = "assets/images/on.gif"
    } else {
      lampu1.src = "assets/images/off.gif";
      lampu2.src = "assets/images/off.gif";
      lampu3.src = "assets/images/off.gif";
    }
  
    if (toggle2.checked) {
        lampu4.src = "assets/images/on.gif"
    } else {
        lampu4.src = "assets/images/off.gif";
    }
  
    if (toggle3.checked) {
      lampu5.src = "assets/images/on.gif"
      lampu6.src = "assets/images/on.gif"
    } else {
      lampu5.src = "assets/images/off.gif";
      lampu6.src = "assets/images/off.gif";
    }

    if (toggle4.checked) {
      lampu7.src = "assets/images/on.gif"
      lampu8.src = "assets/images/on.gif"
      lampu9.src = "assets/images/on.gif"
      lampu10.src = "assets/images/on.gif"
    } else {
      lampu7.src = "assets/images/off.gif";
      lampu8.src = "assets/images/off.gif";
      lampu9.src = "assets/images/off.gif";
      lampu10.src = "assets/images/off.gif";
    }
  }