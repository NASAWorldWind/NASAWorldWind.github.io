---
title: "Test Contact Form"
date: 2017-11-01T14:09:33-07:00
draft: false
---

## Contact Us

---

<form class="container" id="needs-validation" novalidate>
    <div class="row">
        <div class="col-md-12 mb-3">
            <h4>Name</h4>
            <input type="text" id="name" name="name" class="form-control" placeholder="Enter Name" required/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 mb-3">
            <h4>Email</h4>
            <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" required/>
        </div>
    </div>
    </div>
    <br></br>
    <button class="btn btn-primary" type="submit">Submit form</button>
</form>

<script>
(function() {
'use strict';

window.addEventListener('load', function() {
var form = document.getElementById('needs-validation');
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
}, false);
})();
</script>