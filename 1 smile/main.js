const smile = {
  face: function (cxt) {
    cxt.beginPath()
    cxt.arc(203, 203, 200, 0, Math.PI * 2)
    cxt.lineWidth = 6
    cxt.strokeStyle = "#000000"
    cxt.fillStyle = "#ffff01"
    cxt.fill()
    cxt.stroke()
    cxt.closePath()
  },
  eye: function (cxt, type) {
    cxt.beginPath()
    if (type == "left") {
      cxt.arc(150, 150, 30, 0, Math.PI * 2)
    } else if (type == "right") {
      cxt.arc(250, 150, 30, 0, Math.PI * 2)
    }
    cxt.fillStyle = "#000000"
    cxt.fill()
    cxt.closePath()
  },
  mouth: function (cxt) {
    cxt.beginPath()
    cxt.arc(200, 230, 100, 0, Math.PI)
    cxt.lineWidth = 6
    cxt.strokeStyle = "#000000"
    cxt.stroke()
    cxt.closePath()

    cxt.beginPath()
    cxt.arc(105, 260, 30, Math.PI * 1.1, Math.PI * 1.8)
    cxt.stroke()
    cxt.closePath()

    cxt.beginPath()
    cxt.arc(295, 260, 30, Math.PI * 1.2, Math.PI * 1.9)
    cxt.stroke()
    cxt.closePath()
  },
  draw: function () {
    const myCanvas = document.getElementById("myCanvas")
    const cxt = myCanvas.getContext("2d")

    myCanvas.width = 406
    myCanvas.height = 406

    smile.face(cxt)
    smile.eye(cxt, "left")
    smile.eye(cxt, "right")
    smile.mouth(cxt)
  }
}

window.onload = function () {
  smile.draw()
}