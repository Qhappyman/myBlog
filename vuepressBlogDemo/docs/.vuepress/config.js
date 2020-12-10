module.exports = {
    title: '郭俊清的个人博客',
    description: 'My blog about me',
    themeConfig: {
      nav:[
        {text:'首页',link:'/index/'},
        { text: 'JS', link: '/js/' }, // 内部链接 以docs为根目录
        { text: 'CSS', link: '/css/' }, // 外部链接
        { text: 'Vue', link: '/vue/' },
        { text: 'React', link: '/react/' },
        { text: 'Webpack', link: '/webpack/' },
        { text: 'algorithms', link: '/algorithms/' },
        {text: 'structures',link: '/structures/'},
        {text: 'network', link:'/network/'},
        {text: 'node', link:'/node/'},
        // 下拉列表
        {
          text: 'GitHub',
          link: 'https://github.com/qhappyman' 
        }        
      ],
      sidebar:{
        // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
        '/structures/': [
            // '/structures/', // accumulate文件夹的README.md 不是下拉框形式
            {
              title: '数据结构',
              children: [
                '/structures/tree/tree', // 以docs为根目录来查找文件
                '/structures/stack/stack',
                '/structures/hash/hash', // 以docs为根目录来查找文件 
                // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
              ]
            },
            {
                title: '高级算法',
                children: [
                  '/structures/tree/tree', // 以docs为根目录来查找文件
                  '/structures/stack/stack',
                  '/structures/hash/hash', // 以docs为根目录来查找文件 
                  // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                  // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                ]
              }
          ],
          '/js/': [
            '/js/'
          ],
          '/css/': [
            {
              title:'css',
              children:[
                '/css/css/css'
              ]
            },
            {
              title: 'css3',
              children: [
                '/css/css3/css3'
              ]
            },
            {
              title: 'css布局',
              children: [
                '/css/layout/layout'   //常用布局
              ]
            },
            {
              title: 'css知识点',
              children: [
                '/css/question/question'    //css的相关知识点
              ]
            },
          ],
          '/vue/': [
            '/vue/'// accumulate文件夹的README.md 不是下拉框形式
          ],
          '/react/': [
            '/react/'// accumulate文件夹的README.md 不是下拉框形式
          ],
          '/webpack/': [
            '/webpack/'// accumulate文件夹的README.md 不是下拉框形式
          ],
          '/algorithms/':[
              {
                title:'双指针',
                children:[
                  '/algorithms/pointer/pointer',
                ]
              },
              {
                title: '二叉树',
                children: [
                  '/algorithms/pointer/pointer',
                ]
              },
              {
                title: '位运算',
                children: [
                  '/algorithms/bit/bit',
                ]
              },
              {
                title: '动态规划',
                children: [
                  '/algorithms/dyPlan/dyPlan',
                ]
              },
              {
                title: '排序算法',
                children: [
                  '/algorithms/sort/sort',
                ]
              },
              {
                title: '滑动窗口',
                children: [
                  '/algorithms/slidingwindow/slidingwindow',
                ]
              },
              {
                title: '递归',
                children: [
                  '/algorithms/recursion/recursion',
                ]
              },
              {
                title: 'BFS',
                children: [
                  '/algorithms/BFS/BFS',
                ]
              },
              {
                title: 'DFS',
                children: [
                  '/algorithms/DFS/DFS',
                ]
              }
          ],
          '/network/': [
            '/network/'// accumulate文件夹的README.md 不是下拉框形式
          ],
          '/node/': [
            '/node/'// accumulate文件夹的README.md 不是下拉框形式
          ]
      }
    }
  }