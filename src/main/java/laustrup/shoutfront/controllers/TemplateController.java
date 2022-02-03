package laustrup.shoutfront.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class TemplateController {

    @GetMapping("/")
    public String login(Model model) {
        model.addAttribute("body","login");
        return "index.html";
    }

    @GetMapping("/dashboard/?username={username}")
    public String dashboard(@PathVariable(name = "username") String username, Model model) {
        model.addAttribute("body","dashboard");
        return "index.html";
    }
}
