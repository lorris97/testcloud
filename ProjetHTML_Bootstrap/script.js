
document.getElementById("tsss").innerHTML = "Jour";

    document.getElementById("tsss").addEventListener("mouseover", nuit);
    document.getElementById("tsss").addEventListener("mouseout", jour);



function nuit()
    {
      document.getElementById("tsss").innerHTML = "nuit";
      document.getElementById("tsss").style.color = "white";
      document.body.style.backgroundColor = "black";
    }
    function jour()
      {
        document.getElementById("tsss").innerHTML = "jour";
          document.getElementById("tsss").style.color = "black";
        document.body.style.backgroundColor = "white";

      }
