function export2txt(data) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 0)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "page_1.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

//Retorna a 'página' de cadastros especificada
function getPage(page){
    //                                      /sigss/usuarioServico/listar?searchFieldBusca=entf.entfNomePai&searchStringBusca=&searchStringBuscaUsuServico=&filtro%5B0%5D=isFiltrarIdade%3Afalse&filtro%5B1%5D=idadeInicial%3A&filtro%5B2%5D=idadeFinal%3A&filtro%5B3%5D=isFiltrarDataNasc%3Afalse&filtro%5B4%5D=dataNascInicial%3A&filtro%5B5%5D=dataNascFinal%3A&filtro%5B6%5D=situacaoCadastral%3A&filtro%5B7%5D=isBloqueado%3A2&filtro%5B8%5D=isenSexo%3A&filtro%5B9%5D=status%3AATIVO&filtro%5B10%5D=enti.entfNomeMaePesquisa%3A&filtro%5B11%5D=isen.isenNumCadSusPesquisa%3A&filtro%5B12%5D=entf.entfDtNasc%3A&filtro%5B13%5D=entf.entfCPFPesquisa%3A&filtro%5B14%5D=entf.dataNascimento%3A&searchStatus=ATIVO&_search=false&nd=1691792988902&rows=5000&page=' + page + '&sidx=enti.entiNome&sord=asc
    
    //Link ativos não bloqueados
    //var theUrl = window.location.origin + '/sigss/usuarioServico/listar?searchFieldBusca=entf.entfNomePai&searchStringBusca=&searchStringBuscaUsuServico=&filtro%5B0%5D=isFiltrarIdade%3Afalse&filtro%5B1%5D=idadeInicial%3A&filtro%5B2%5D=idadeFinal%3A&filtro%5B3%5D=isFiltrarDataNasc%3Afalse&filtro%5B4%5D=dataNascInicial%3A&filtro%5B5%5D=dataNascFinal%3A&filtro%5B6%5D=situacaoCadastral%3A&filtro%5B7%5D=isBloqueado%3A2&filtro%5B8%5D=isenSexo%3A&filtro%5B9%5D=status%3AATIVO&filtro%5B10%5D=enti.entfNomeMaePesquisa%3A&filtro%5B11%5D=isen.isenNumCadSusPesquisa%3A&filtro%5B12%5D=entf.entfDtNasc%3A&filtro%5B13%5D=entf.entfCPFPesquisa%3A&filtro%5B14%5D=entf.dataNascimento%3A&searchStatus=ATIVO&_search=false&nd=1691764773097&rows=5000&page=' + page + '&sidx=enti.entiNome&sord=asc';
    
    //Link todos
    //                                      /sigss/usuarioServico/listar?searchFieldBusca=isen.isenCod&searchStringBusca=&searchStringBuscaUsuServico=&filtro%5B0%5D=isFiltrarIdade%3Afalse&filtro%5B1%5D=idadeInicial%3A&filtro%5B2%5D=idadeFinal%3A&filtro%5B3%5D=isFiltrarDataNasc%3Afalse&filtro%5B4%5D=dataNascInicial%3A&filtro%5B5%5D=dataNascFinal%3A&filtro%5B6%5D=situacaoCadastral%3A&filtro%5B7%5D=isBloqueado%3A&filtro%5B8%5D=isenSexo%3A&filtro%5B9%5D=status%3A&filtro%5B10%5D=enti.entfNomeMaePesquisa%3A&filtro%5B11%5D=isen.isenNumCadSusPesquisa%3A&filtro%5B12%5D=entf.entfDtNasc%3A&filtro%5B13%5D=entf.entfCPFPesquisa%3A&filtro%5B14%5D=entf.dataNascimento%3A&searchStatus=&_search=false&nd=1692726910850&rows=15&page=1&sidx=enti.entiNome&sord=asc
    var theUrl = window.location.origin + '/sigss/usuarioServico/listar?searchFieldBusca=isen.isenCod&searchStringBusca=&searchStringBuscaUsuServico=&filtro%5B0%5D=isFiltrarIdade%3Afalse&filtro%5B1%5D=idadeInicial%3A&filtro%5B2%5D=idadeFinal%3A&filtro%5B3%5D=isFiltrarDataNasc%3Afalse&filtro%5B4%5D=dataNascInicial%3A&filtro%5B5%5D=dataNascFinal%3A&filtro%5B6%5D=situacaoCadastral%3A&filtro%5B7%5D=isBloqueado%3A&filtro%5B8%5D=isenSexo%3A&filtro%5B9%5D=status%3A&filtro%5B10%5D=enti.entfNomeMaePesquisa%3A&filtro%5B11%5D=isen.isenNumCadSusPesquisa%3A&filtro%5B12%5D=entf.entfDtNasc%3A&filtro%5B13%5D=entf.entfCPFPesquisa%3A&filtro%5B14%5D=entf.dataNascimento%3A&searchStatus=&_search=false&nd=1692726910850&rows=5000&page=' + page + '&sidx=enti.entiNome&sord=asc';

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    data = JSON.parse(xmlHttp.responseText);
    return data;
}

//Baixa todos os cadastros atualmente disponiveis na base
function getFullyDb(){
    let total = -1;
    let drop = {"page":1,"total":1,"records":0,"rows":[]};

    for(let i = 1; i <= total || total == -1; i++){
        var page = getPage(i);
        console.log('Page ' + i + '/' + total + ' downloaded...');

        if(total == -1){
            total = page['total'];
        }

        drop['rows'] = drop['rows'].concat(page['rows']);
    }

    drop['records'] = drop['rows'].length;

    export2txt(drop);
}

getFullyDb();
