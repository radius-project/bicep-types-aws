package bodydata

import (
	"io/ioutil"
	"os/user"
	"strings"

	"github.com/aws/aws-sdk-go-v2/aws"
)

func Load(f string, cfg *aws.Config) (string, error) {
	b, err := ioutil.ReadFile(f)
	if err != nil {
		return "", err
	}

	str := string(b)
	if cfg != nil {
		str = strings.ReplaceAll(str, "$region$", cfg.Region)
	}

	user, err := user.Current()
	if err != nil {
		return "", err
	}
	str = strings.ReplaceAll(str, "$user$", user.Username)

	return str, nil
}
