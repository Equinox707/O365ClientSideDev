
export class Utils {

    log(msg) {
        console.log(msg);
    }

    writeDate() {
        //return moment(new Date()).format("LTS");
    }
    
    getUsers() {
        var url = "http://sp2016/_api/Web/lists/getbytitle('User Information List')/items";
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
                console.log("Users in the Root Web: ", data.value);
            },
            error: function(msg) {
                console.log("GetVouchers query error", msg);
            }
        });
    }

}