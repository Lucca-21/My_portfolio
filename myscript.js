/* ==================== Send Email ================================= */

function SendMail() {
    var params = {
        from_name : document.getElementById('name_input').value,
        email_id : document.getElementById('email_input').value,
        message : document.getElementById('message_input').value
    }

    emailjs.send('service_feadt6d', 'template_20b3tmo', params).then(function (res) {
        alert('Success!' + res.status);
    })
}
