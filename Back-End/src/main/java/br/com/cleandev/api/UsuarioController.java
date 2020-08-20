package br.com.cleandev.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cleandev.entities.UsuarioEntity;
import br.com.cleandev.repositories.UsuarioRepository;

@CrossOrigin(origins = "*")
@RestController /* Retorna o objeto e os dados do objeto são gravados diretamente 
na resposta HTTP como Json ou XML. */
@RequestMapping("api/usuario")
public class UsuarioController {
    @Autowired // Possibilita entregar a dependência para um objeto.
    UsuarioRepository injecao;
    
    @PostMapping // Cria um novo usuário.
    public UsuarioEntity addUsuario(@RequestBody UsuarioEntity API) {
        return injecao.save(API);
    }
    
    @DeleteMapping("/{id}") // Deleta um usuário existente pelo ID.
    public UsuarioEntity removeUsuario(@PathVariable Long id) {
        injecao.deleteById(id);
        return null;
    }
    
    @GetMapping // Retorna um usuário existente.
    public List<UsuarioEntity> getUsuario() {
        return injecao.findAll();
    }
    
    @PutMapping // Atualiza um usuário existente.
    public UsuarioEntity updateUsuario(@RequestBody UsuarioEntity usuario) {
        return injecao.save(usuario);
    }
}