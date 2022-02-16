package Futurum.Sellers_app.Controllers;

import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class budgetController {
    private float balance;
    public budgetController(){balance=100000;
    }

@GetMapping(value = "/balance")
public float getBalance() {
    return balance;
}

    public void updateBalance(float bal)
    {
        this.balance-=bal;
    }

}
