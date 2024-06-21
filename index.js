
let count = 0
let countEl = document.getElementById("count-el")
let message = "Previous entries are "
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")

function increment() {
  count = count + 1
  countEl.innerText = count

}

function save() {
  console.log(count)
  console.log(saveEl)
  let countStr = " " + count + " - "
  saveEl.innerText += countStr
}

function reset() {
  count = 0
  countEl.innerText = count
}
