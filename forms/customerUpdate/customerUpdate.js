
req = ""
query = ""
results = ""


customerUpdate.onshow = function() {
  drpUpdate.clear()
  query = "SELECT name from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
    console.log(results)
  }
  if (results.length == 0) {
    console.log("There are no customers to Update.")
  } else {
    for (i = 0; i <= results.length - 1; i++)
      drpUpdate.addItem(results[i])
  }
}

let oldName = ''

drpUpdate.onclick = function(s) {
  if (typeof(s) == "object")
    return
  else {
    drpUpdate.value = s 
    oldName = s
  }
}


btnSubmit.onclick = function() {
  let newName = txtUpdate.value

  let found = false
  for (i = 0; i <= results.length - 1; i++)
    if (oldName == results[i]) {
      found = true
      break
    }

  if (found == false)
    console.log("That customer name is not in the database.")
  else if (found == true) {
    query = `UPDATE customer SET name = '${newName}' WHERE name = '${oldName}'`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)

    if (req.status == 200) { 
      if (req.responseText == 500) { 
       console.log(`You have successfully changed the customers name!`)
        txtUpdate.value = ""
        drpUpdate.value = "Customer"
      } else
        console.log(`There was a problem changing the Customer's name.`)
    } else
      console.log(`Error: ${req.status}`);
  } 
  query = "SELECT name from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)

  if (req.status == 200) { 
    results = JSON.parse(req.responseText)
  }
 if (results.length == 0) {
    console.log("There are no customers in tabel.")
  } else {
    let customersUpdate = ""
    for (i = 0; i <= results.length - 1; i++)
      customersUpdate = customersUpdate + results[i] + "\n"

    txtUpdated.value = customersUpdate
  }
}