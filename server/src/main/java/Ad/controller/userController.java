package Ad.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import Ad.service.Iservice.IuserService;
import Ad.model._User;

@RestController
public class userController {

	@Autowired
	private IuserService serv;

	@PostMapping("/user/isExist") // האם לקוח קיים
	public _User getUser(@RequestBody _User u) {
		return serv.findUser(u.getEmail(), u.getPassword());
	}

	@PostMapping("/user/add") // הוספת לקוח
	public boolean addUser(@RequestBody _User u) {
		return serv.addUser(u);
	}
}
