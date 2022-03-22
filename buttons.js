<script>
  function buttonValue() {
    let values = document.getElementById('values').value;
    let random = Math.ceil(Math.random() * values);
    if (values < 2) {
      alert("The number of participating buttons cannot be less than 2!")
      window.location.reload();
    }
    for(let i = 1; i <= values; i++) {
      let btn = document.createElement('button');
      btn.innerHTML = '<button type="button" class="btn btn-success">Try</button>';
      document.getElementById('list').appendChild(btn);
      btn.onclick = function() {
        if(random == i) {
          alert("Congrats!You have chosen the winning button!")
          window.location.reload();
        } else {
          alert("Sorry, the selected button is not the winner. Please, try again!")
        }
      }
    }
    return false;
  }
</script>
