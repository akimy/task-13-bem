### Задание в ШРИ №13 - BEM
>Приложение на базе bem-react-boilerplate
#### Инструкция по установке приложения

Если после установки докера у вас в системе возникает ошибка `Cannot connect to the Docker daemon at unix:///var/run/docker.sock.` введите в консоль последовательно команды `docker-machine restart` и `eval $(docker-machine env default)`
   
  1. ```docker build -t akimy .```  
  2. ```docker run -p 4000:3000 akimy```  
  3. ```docker-machine ip``` - во втором терминале узнаем IP   
  4. приложение доступно по указанному IP на 4000 порту
  5. остановить приложение ```docker container ls``` и ```docker container stop ${Container ID}```

  Приложение на хероку:  
  https://bem-react-shri.herokuapp.com/