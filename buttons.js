<script>
  var random;
  function buttonValue() {
    let values = $(`#values`).val();
    random = Math.floor(Math.random() * values) + 1;
    if (values < 2) {
      alert("The number of participating buttons cannot be less than 2!")
      window.location.reload();
    }
    for(let i = 1; i <= values; i++) {
      $(`#list`).append(`
      <div class="card" id="`+ i +`">
        <div class="card-body">
          <h5>Maybe that's the winning button</h5>
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-info" onclick="return winningButton(`+ i +`);" >Try</a>
        </div>
      </div>
    `)
    }
    return false;
  }
  function winningButton(idValues) {
    if(random == idValues) {
      alert("Congrats!You have chosen the winning button!")
      window.location.reload();
    } else {
      alert("Sorry, the selected button is not the winner. Please, try again!")
    }
    return false;
  }
</script>
