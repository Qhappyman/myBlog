## 1.滑动窗口的最大值-剑指offer59-|

### 滑动窗口加双向队列
```
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if(nums.length == 0||k==0){
            return new int[0];              //如果队列长度为0则返回0
        }
        Deque<Integer> deque = new LinkedList<>();   //声明一个双向队列
        int[] res=new int[nums.length-k+1];         //存放结果的数组
        for(int j=0,i=1-k;j<nums.length;i++,j++){   //这里的i=1-k，是为了让队列元素个数达到k进行操作
            if(i>0&&deque.peekFirst()== nums[i-1]){ //如果队首元素和即将进入队列的元素相同，那么移除队首元素
                deque.removeFirst();
            }
            while(!deque.isEmpty()&&deque.peekLast()<nums[j]){  //如果队尾元素小于入队列元素，则移除队尾元素，直到满足条件
                deque.removeLast();
            }
            deque.addLast(nums[j]);     //不管i<0还是i>0都往进添加元素，当队列达到三个元素时自动执行第一个if
            if(i>=0){                   //队列是从大到小排列，取出第一个即可
                res[i]= deque.peekFirst();
            }
        }
        return res;
    }
}
```
#### 原理
![](https://pic.leetcode-cn.com/bab293bfd2fd6b1c2e41409c70b4201160c6433f3ecdf9c431fd5b99cf201409-Picture1.png)
### 暴力法
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = new Array();
    let start = 0,last = k-1;
    if(nums.length===0||k===0){
        return new Array(0)
    }
    while(last<nums.length){
        let maz=nums[last];
        for(let p = start;p<=last;p++){
            maz=Math.max(nums[p],maz)
        }
        res[start++]=maz;
        last++;
    }
    return res;
};
```