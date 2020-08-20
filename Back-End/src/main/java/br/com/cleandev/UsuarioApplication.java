package br.com.cleandev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/* Define a configuração automática, varredura de componentes e permite importar 
classes de configurações adicionais. */
@SpringBootApplication 
public class UsuarioApplication {
    
    // Método padrão - público, estático e sem retorno.
    public static void main(String[] args) {
		SpringApplication.run(UsuarioApplication.class, args);
	}
}