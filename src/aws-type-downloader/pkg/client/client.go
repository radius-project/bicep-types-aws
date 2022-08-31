package client

import (
	"context"
	"sync"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/cloudcontrol"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation"
)

var cfg *aws.Config
var clnt *cloudcontrol.Client
var cf *cloudformation.Client
var cfge error
var cfgonce sync.Once
var clntonce sync.Once
var cfonce sync.Once

func SharedConfig(ctx context.Context) (aws.Config, error) {
	cfgonce.Do(func() {
		c, err := config.LoadDefaultConfig(ctx)
		if err != nil {
			return
		}

		cfg = &c
		cfg.ClientLogMode |= aws.LogRequestWithBody
		cfg.ClientLogMode |= aws.LogResponseWithBody
	})

	return *cfg, cfge
}

func CloudControlClient(ctx context.Context) (*cloudcontrol.Client, error) {
	clntonce.Do(func() {
		cfg, err := SharedConfig(ctx)
		if err != nil {
			return
		}

		clnt = cloudcontrol.NewFromConfig(cfg)
	})

	return clnt, cfge
}

func CloudFormationClient(ctx context.Context) (*cloudformation.Client, error) {
	cfonce.Do(func() {
		cfg, err := SharedConfig(ctx)
		if err != nil {
			return
		}

		cfg.ClientLogMode = 0
		cfg.RetryMode = aws.RetryModeAdaptive
		cfg.RetryMaxAttempts = 50

		cf = cloudformation.NewFromConfig(cfg)
	})

	return cf, cfge
}
