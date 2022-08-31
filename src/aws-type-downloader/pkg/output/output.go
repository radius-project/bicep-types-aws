package output

import (
	"encoding/json"
	"fmt"
)

func Print(response interface{}, err error) {
	fmt.Println()
	if err != nil {
		fmt.Println("Error")
		fmt.Println()

		j, err := json.MarshalIndent(&err, "", "  ")
		if err != nil {
			panic(err)
		}
		fmt.Println(string(j))

		return
	}

	fmt.Println("Successs")
	fmt.Println()

	j, err := json.MarshalIndent(&response, "", "  ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(j))
}
