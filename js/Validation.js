function Validation(){
    //Kiem tra rong
    this.KiemTraRong=function(idInput,idThongBao, noiDungTB){
var value=getEle(idInput).value;
var isValid=true;
if(value==""){
    isValid=false;
    getEle(idThongBao).style.display="block";
    getEle(idThongBao).innerHTML=noiDungTB;
}else {
    getEle(idThongBao).innerHTML="";
}
return isValid;
    }   
    //Kiem tra dinh dang chu
    this.KiemTraDinhDangChu=function(idInput,idThongBao, noiDungTB){
        var value=getEle(idInput).value;
    var isValid=true;
    var pattern=new RegExp( "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    if(!pattern.test(value)){//Dung tra ve true, sai ve false
        isValid=false;
        getEle(idThongBao).style.display="block";
        getEle(idThongBao).innerHTML=noiDungTB;
    }else {
        getEle(idThongBao).innerHTML="";
    }
    return isValid;
        }
        //Kiem tra email
    this.KiemTraDinhDangEmail=function(idInput,idThongBao,noiDungTB){
        var value=getEle(idInput).value;
        var isValid=true;
        var pattern=new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
        + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        if(!pattern.test(value)){
            isValid=false;
            getEle(idThongBao).style.display="block";
            getEle(idThongBao).innerHTML=noiDungTB;
        }else{
            getEle(idThongBao).innerHTML="";
        }
        return isValid;
    }
    
    //Kiem tra do dai
    this.KiemTraDoDai=function(idInput,idThongBao,noiDungTB,min,max){
        var value=getEle(idInput).value;
        var isValid=true;
        if(value.length<min || value.length>max){
            isValid=false;
            getEle(idThongBao).style.display="block";
            getEle(idThongBao).innerHTML=noiDungTB;
        }else{
            getEle(idThongBao).innerHTML="";
        }
        return isValid;
    }

    //Kiem tra chuc vu
    this.KiemTraChucVu=function(){
        var chucVuElm=getEle("chucvu");
        var isValid=true;
        if(chucVuElm.selectedIndex===0){
            isValid=false;
            getEle("tbChucVu").style.display="block";
            getEle("tbChucVu").innerHTML="(*) Vui long chon chuc vu";
            // getEle(idThongBao).innerHTML=noiDungTB;
        }else{
            getEle("tbChucVu").innerHTML="";
        }
        return isValid;
    }
    
}
