---
title: "Contact Form"
date: 2017-11-01T13:51:37-07:00
draft: false
---

## Contact Us

---

<html>
<body>
<form action="/php/contact-form-email.php" method="post">
<div class="controls">

  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <h4>Name *</h4>
          <input type="text" name="name" class="form-control">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <h4>Email *</h4>
          <input type="text" name="email" class="form-control">
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="form-group">
        <h4>Message *</h4>
          <input type="text" name="message" class="form-control">
      </div>
    </div>
  </div>

  <input type="submit" value="Submit">

</div>
</form>


</body>
</html>

