package com.sys5.spui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SampleController {

    @GetMapping("/")
    public String hello(Model model) {
        model.addAttribute("message", "Hello Thymeleaf!!");
        return "index";
    }

}
