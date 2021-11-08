try {
    var token = localStorage.getItem("jwt_token");
    var decoded = jwt_decode(token);

    console.log(decoded);   
    [
        '/assets/plugins/sidebar/sidebar-custom.js',
        '/assets/plugins/sidebar/sidebar.js',
        
    ].forEach(function(value,index){
        console.log(value);
        const script = document.createElement("script");
        script.src = value;
        script.async = true;
        //script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);  
    });
} catch (error) {
    history.push('/');
}    