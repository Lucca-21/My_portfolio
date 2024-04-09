/* ==================== Send Email ================================= */

function SendMail() {
    var params = {
        from_name : document.getElementById('name_input').value,
        email_id : document.getElementById('email_input').value,
        message : document.getElementById('message_input').value
    }

    emailjs.send('service_gk2sanu', 'template_xic9z5f', params).then(function (res) {
        alert('Success!' + res.status);
    })
}
