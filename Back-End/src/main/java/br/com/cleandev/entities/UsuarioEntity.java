package br.com.cleandev.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // Os objetos devem ser persistidos no banco de dados.
@Table(name="tb_usuario") // Define a tabela com o nome tb_usuario.

public class UsuarioEntity implements Serializable {
    
    /* Verifica se o objeto recuperado é de uma versão compatível com a versão
    da classe que foi utilizada na serialização. */
    private static final long serialVersionUID = 1L;
    @Id // Informa ao JPA o campo que será chave primária.
    // Geração do valor da chave primária é de responsabilidade do banco.
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    @Column (name="nome")
    private String nome;
    @Column (name="cpf")
    private String cpf;
    @Column (name="email")
    private String email;
    @Column (name="senha")
    private String senha;
    @Column (name="telefone")
    private String telefone;
    @Column (name="data_nascimento")
    private Date data_nascimento;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Date getData_nascimento() {
        return data_nascimento;
    }

    public void setData_nascimento(Date data_nascimento) {
        this.data_nascimento = data_nascimento;
    }
    
    @Override
    public String toString() {
        return "UsuarioEntity [id=" + id + ", nome=" + nome + ", cpf=" + cpf + ", email=" + email + ", senha=" + senha + ", telefone=" + telefone + ", data_nascimento=" + data_nascimento + ']';
    }    
}