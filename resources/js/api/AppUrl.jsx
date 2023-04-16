
export default class AppUrl{
    //version
    static version="v1";
    //base url
    static baseUrl="http://127.0.0.1:8000/api/"+this.version;

    //authentication starts
    static PostRegister=this.baseUrl+"/register"
    static ActiveAccount(token){
        return this.baseUrl+"/active/"+token;
    }
    static UpdateToken(token){
        return this.baseUrl+"/updatetoken/"+token;
    }
    static PostLogin=this.baseUrl+"/login";
    static PostForgetPassword=this.baseUrl+"/forgetpassword";
    static PostResetPassword=this.baseUrl+"/resetpassword";

    static ProviderLoginRedirect(provider){
        return this.baseUrl+"/login/"+provider+"/redirect";
    }
    static ProviderLoginCallback(provider){
        return this.baseUrl+"/login/"+provider+"/callback";
    }
    //authentication ends


    //user details starts
    static LoginUserData=this.baseUrl+"/user";
    static AddToCart=this.baseUrl+"/addtocart";
    static CartList(email){
        return this.baseUrl+"/cartlist/"+email;
    }
    static RemoveCartList(id){
        return this.baseUrl+"/removecartlist/"+id;
    }
    static CartCount(email){
        return this.baseUrl+"/cartcount/"+email;
    }

    static GetAllOrderFromUser(user_id){
        return this.baseUrl+"/"+user_id+"/orders";
    }
    static OrderDetails(order_id){
        return this.baseUrl+"/"+order_id+"/order_details";
    }
    //user details ends

    static getBanners=this.baseUrl+"/allbanners"
    static GetCategories=this.baseUrl+"/allcategory";
    static GetMenuListByCategory=this.baseUrl+"/menulistbycategory";
    static GetMenus=this.baseUrl+"/allmenu";
    static GetMenu(id){
        return this.baseUrl+"/menu/"+id;
    }



    //user checkout details starts
    static getAllDivitions=this.baseUrl+"/alldivitions"
    static DivisionWiseDistrict(division_id){
        return this.baseUrl+"/district-get/"+division_id;
    }
    static DistrictWiseState(district_id){
        return this.baseUrl+"/state-get/"+district_id;
    }

    //user paiment deatils starts
    static confirmOrder=this.baseUrl+"/stripe/order"
    static OrderWithSslCommerz=this.baseUrl+"/sslcommerce/order"
    //user paiment details ends

    static InvoiceDownload(order_id){
        return this.baseUrl+"/"+order_id+"/invoice_download";
    }

}
