function cadastrar(){

    var dados = new Object()
    dados.nome = document.getElementById("nome").value
    dados.cpf = document.getElementById("cpf").value
    dados.email = document.getElementById("email").value
    dados.senha = document.getElementById("senha").value
    dados.telefone = document.getElementById("telefone").value
    dados.data_nascimento = document.getElementById("data_nascimento").value
    dados.id = document.getElementById("id").value

    var request = new XMLHttpRequest()

    request.open('POST', 'http://localhost:8080/api/usuario', true)
    request.onload = function(){
        if ((request.status >= 200) && (request.status < 400)) {
            console.log("Conexão ocorreu com sucesso!")
        }
        else{
            console.log("Conexão com problema!")
        }
    }
    request.setRequestHeader("Content-Type","application/json")
    request.send(JSON.stringify(dados));
    alert("Usuário inserido com sucesso!")

    location.reload()
}

function carregar(){

    const app = document.getElementById('root')
    const container = document.createElement('div')

    container.setAttribute('class', 'container')

    app.appendChild(container)

    var request = new XMLHttpRequest()
    // Faz a conexão.
    request.open('GET', 'http://localhost:8080/api/usuario', true)

    request.onload = function() {

            var usuarios = JSON.parse(this.response)
            if ((request.status >= 200) && (request.status < 400)) {

                const tabela = document.createElement('table')
                container.appendChild(tabela)

                const cabecalho = document.createElement('tr')
                tabela.appendChild(cabecalho)

                const cabeca1 = document.createElement('th')
                cabeca1.textContent = 'Nome'

                const cabeca2 = document.createElement('th')
                cabeca2.textContent = 'CPF'

                const cabeca3 = document.createElement('th')
                cabeca3.textContent = 'E-mail'

                const cabeca4 = document.createElement('th')
                cabeca4.textContent = 'Senha'

                const cabeca5 = document.createElement('th')
                cabeca5.textContent = 'Telefone'

                const cabeca6 = document.createElement('th')
                cabeca6.textContent = 'Data Nascimento'

                const cabeca7 = document.createElement('th')

                const cabeca8 = document.createElement('th')

                cabecalho.appendChild(cabeca1)
                cabecalho.appendChild(cabeca2)
                cabecalho.appendChild(cabeca3)
                cabecalho.appendChild(cabeca4)
                cabecalho.appendChild(cabeca5)
                cabecalho.appendChild(cabeca6)
                cabecalho.appendChild(cabeca7)
                cabecalho.appendChild(cabeca8)

                // Estrutura de repetição - varre o vetor dados.
                usuarios.forEach(usuario => {
                    // Cria uma linha da tabela.
                    const linha = document.createElement('tr')
                    tabela.appendChild(linha)
                    tabela.setAttribute('class', 'table table-dark')
                    // Cria elemento <td>.
                    const coluna1 = document.createElement('td')
                    // Adiciona texto ao elemento.
                    coluna1.textContent = `${usuario.nome}`
                    // Cria elemento h2.
                    const coluna2 = document.createElement('td')
                    coluna2.textContent = `${usuario.cpf}`
                    // Cria elemento h3.
                    const coluna3 = document.createElement('td')
                    coluna3.textContent = `${usuario.email}`

                    const coluna4 = document.createElement('td')
                    coluna4.textContent = `${usuario.senha}`

                    const coluna5 = document.createElement('td')
                    coluna5.textContent = `${usuario.telefone}`

                    const coluna6 = document.createElement('td')
                    coluna6.textContent = `${usuario.data_nascimento.substr(0,10)}`

                    const coluna7 = document.createElement('td')

                    const imagemRemove = document.createElement('img')

                    imagemRemove.setAttribute('src', 'assets/remove.png')

                    imagemRemove.setAttribute('onclick', `remover(${usuario.id})`)

                    coluna7.appendChild(imagemRemove)

                    const coluna8 = document.createElement('td')

                    const imagemAtualiza = document.createElement('img')

                    imagemAtualiza.setAttribute('src', 'assets/atualiza.png')

                    imagemAtualiza.setAttribute('onclick', `atualizar(${JSON.stringify(usuario)})`)

                    coluna8.appendChild(imagemAtualiza)

                    linha.appendChild(coluna1)
                    linha.appendChild(coluna2)
                    linha.appendChild(coluna3)
                    linha.appendChild(coluna4)
                    linha.appendChild(coluna5)
                    linha.appendChild(coluna6)
                    linha.appendChild(coluna7)
                    linha.appendChild(coluna8)
                });
            } else {

                const erro = document.createElement('marquee')

                erro.textContent = 'Não funcionou!'

                app.appendChild(erro)
            }
        }
    request.send();
}

function remover(id){
    var request = new XMLHttpRequest()
    request.open ('DELETE', `http://localhost:8080/api/usuario/${id}`, true)
    request.onload = function(){
        if ((request.status >= 200) && (request.status < 400)) {
            console.log("Conexão ocorreu com sucesso!")
        }
        else{
            console.log("Conexão com problema!")
        }
    }

    request.send()
    alert(`Usuário removido com sucesso!`)

    location.reload()
}

function atualizar(usuario){
    document.getElementById('id').value = usuario.id
    document.getElementById('nome').value = usuario.nome
    document.getElementById('cpf').value = usuario.cpf
    document.getElementById('email').value = usuario.email
    document.getElementById('senha').value = usuario.senha
    document.getElementById('telefone').value = usuario.telefone
    document.getElementById('data_nascimento').value = usuario.data_nascimento.substr(0,10)
}