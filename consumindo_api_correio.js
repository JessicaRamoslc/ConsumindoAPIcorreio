

    var cep = document.getElementById("cep");//armazenei o valor do ID = CEP na variável 


    const showData = (result) => {
        for( const campo in result)
        if(document.querySelector("#"+campo)){
            
            document.querySelector("#"+campo).value = result[campo];
            

        }


        console.log(campo);
    };

    cep.addEventListener("focusout", function teste (event){//escutei o foco sair do input cep, o blur também funciona
        let search = cep.value.replace("-", "");


        const options = {
            method: 'GET', 
            mode: 'cors', 
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options)//isso é uma promise
        //o response está sem parenteses pq é apenas um argumento, se fosse mais deveria colocar
        .then( response  => { response.json()
            .then( data => showData(data)) 
            .catch( e => console.log('Deu erro' + e.message))
        
        
        }) //se der certo, aqui eu to pedindo pra trazer em formato json, porém isso tbm é uma promessa, preciso tratar da mesma forma
        .catch() // se der errado


        

    })



    
    




