tags = {
  Developer = "Tien Nguyen"
  Environment = "Development"
  CostCenter = "Admin"
}

services = [
  # {
  #   prefix = "user"
  #   container_image = "621567429603.dkr.ecr.ap-southeast-1.amazonaws.com/user-service:latest"
  #   port = 3000
  #   path = ["/user/*"]
  #   number_of_tasks = 1
  # }
  {
    prefix = "auth"
    container_image = "621567429603.dkr.ecr.ap-southeast-1.amazonaws.com/auth-service:latest"
    port = 3001
    path = ["/authentication/*"]
    number_of_tasks = 1
    environment = [
      {
        "name" = "DB_HOST",
        "value" = "psa-staging-non-core.cv5kzsjurwgi.ap-southeast-1.rds.amazonaws.com"
      },
      {
        "name" = "DB_PORT",
        "value" = "3306"
      },
      {
        "name" = "DB_USERNAME",
        "value" = "psa_user"
      },
      {
        "name" = "DB_PASSWORD",
        "value" = "psa_password"
      },
      {
        "name" = "DB_DATABASE",
        "value" = "testing"
      }
    ]
  }
]