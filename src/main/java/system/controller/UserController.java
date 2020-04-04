package system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import system.model.User;
import system.service.UserService;

import java.util.List;

@Controller
@RequestMapping("/begin")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<User> list() {
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/valid", method = RequestMethod.GET)
    public ModelAndView valid() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("userFromServer", new User());
        modelAndView.setViewName("check");
        return modelAndView;
    }

    @RequestMapping(value = "/check", method = RequestMethod.GET)
    public @ResponseBody
    String check(@ModelAttribute("userFromServer") User user) {
        if ("admin".equals(user.getLogin())) {
            return "OOOOOKAY";
        } else return "NOOOOPE";
    }
}
