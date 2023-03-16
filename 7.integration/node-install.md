1. Node.js
## yum 설치
    ```bash

    # curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
    # yum install -y nodejs
    ```

## 컴파일 설치(CentOS)
 특정 버젼의 Node 애플리케이션만 운용하는 서버 환경이라면 특정 버젼의 Node만 소스 컴파일 설치하고 애플리케이션을 운용하면 베스트 일 것이다. Linux(CentOS) 에서 Node를 소스 컴파일 설치를 한다. 설치를 위해서는 Python3(정확히, 공유 라이브러리)가 설치되어 있어야 한다. [Python3 리눅스 설치 및 설정]을 참고해서 설치한다. 그리고 V8 엔진 컴파일을 위해 g++ 7.x 버젼이 필요하다. CentOS RPM 설치는 4.x까지 지원하기 때문에 별도 설치 및 설정을 해 주어야 한다.

1.	g++ 7.x 설치 및 설치

    ```bash
    # g++ --version
    g++ (GCC) 4.8.5 20150623 (Red Hat 4.8.5-39)
    Copyright (C) 2015 Free Software Foundation, Inc.
    
    # yum install centos-release-scl
    # yum install devtoolset-7-gcc*
    # scl enable devtoolset-7 bash
    # g++ --version
    Thread model: posix
    gcc version 7.3.1 20180303 (Red Hat 7.3.1-5) (GCC)
    
    ```

2.	설치
    v18.14.1 을 설치하고 설치 위치는 /usr/local/douzone2023/node-v18.14.1 이다.

    ```bash
    # wget https://nodejs.org/dist/v18.14.1/node-v18.14.1.tar.gz
    # tar xvfz node-v18.14.1.tar.gz
    # ./configure --prefix=/usr/local/douzone2023/node-v18.14.1
    # make & make install
    ```

3.	링크 작업

    ```bash
    # ln -s /usr/local/douzone2023/node-v18.14.1 /usr/local/douzone2023/node
    ```

4.	PATH 설정 (vi /etc/profile)

    ```
    # node 
    export PATH=$PATH:/usr/local/douzone2023/node/bin
    ```

5.	설정 적용 및 설치 확인

    ```bash
    # source /etc/profile
    # node --version
    v18.14.1
    ```


## 설치(Mac OS)
 Mac에서의 Node는 대부분이 개발 환경을 위해서 설치될 것이다. 여러 버젼의 Node에서 개발할 경우 여러 버젼의 Node를 설치하고 개발 환경에 적용하는 것은 꽤 번거로운 작업이다. nvm은 이를 해결해 주는 굉장히 유용한 도구다. nvm을 설치하여 여러 버젼의 노드를 설치하도록 한다. 이는 Node 애플리케이션 운용 환경(주로 리눅스 또는 도커)에서 유용하다.

1.	설치된 Node 완전 제거하기
	```bash
	$ sudo npm uninstall npm -g
	$ sudo rm -rf /usr/local/lib/node
	$ sudo rm -rf /usr/local/lib/node_modules
    $ sudo rm -rf /var/db/receipts/org.nodejs.*
    $ sudo rm -rf /usr/local/include/node
    $ sudo rm -rf /usr/local/bin/node
    $ sudo rm -f  /usr/local/share/man/man1/node.1
    $ sudo rm -f  /usr/local/lib/dtrace/node.d
    $ sudo rm -f  /usr/local/bin/npm
    $ sudo rm -f  /opt/local/include/node
    $ sudo rm -rf /opt/local/lib/node_modules
    $ sudo rm -rf ~/.npm
    $ sudo rm -rf ~/.node-gyp
    $ brew uninstall node
    ```

2.	nvm(Node Version Manager) 설치
	여러 버전의 노드에서 실행되는 코드를 작성해야 할 필요성이 반드시 생기기 때문에 nvm을 사용하여 설치하도록 한다.
    ```bash
    $ curl https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
    $ source ~/.profile (mac)
    $ source ~/.bashrc  (centos)
    $ nvm --version
    0.33.8
    $ 
    ```

3.	node 설치
	+ 안정 버젼 설치
     ```bash
     $ nvm install stable
     ```

   + 최신 버젼 설치
     ```bash
     $ nvm install node
     ```

   + 특정 버젼(v12.12.0) 설치
     ```bash
     $ nvm install v12.12.0
     ```

   + node 설치 버젼 확인하기
     ```bash
     $ nvm ls
            v12.12.0
     ->     v13.7.0
     default -> node (-> v13.7.0)
     node -> stable (-> v13.7.0) (default)
     stable -> 13.7 (-> v13.7.0) (default)
     iojs -> N/A (default)
     lts/* -> lts/erbium (-> N/A)
     lts/argon -> v4.9.1 (-> N/A)
     lts/boron -> v6.17.1 (-> N/A)
     lts/carbon -> v8.17.0 (-> N/A)
     lts/dubnium -> v10.18.1 (-> N/A)
     lts/erbium -> v12.14.1 (-> N/A)
     $
     ```

   + node 특정 버젼(v12.12.0) 사용하기

     ```bash
     $ nvm use v12.12.0
     Now using node v12.12.0 (npm v6.11.3)
     $ node -v
     v12.12.0
     $
     ```

   + node 최신 버젼 사용하기

     ```bash
     $ nvm use node
     Now using node v13.7.0 (npm v6.13.6)
     $ node -v
     v13.7.0
     
     ```