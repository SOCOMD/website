package mail

type IQuestion interface {
	Question() string
	Answer() string
}

// Meeting RFC https://tools.ietf.org/html/rfc2822
func EmailApplication(To string, From string, ReplyTo string, Application []IQuestion) error {
	return nil
}
