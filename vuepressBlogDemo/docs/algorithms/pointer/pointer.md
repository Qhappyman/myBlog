## 1.删除数组中的重复项-leetcode23
```
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let pointer1 = 0;   //慢指针
    for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {   //快指针
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2]
        }                   
        //快慢指针值不相同时，慢指针前进并赋值为快指针的值
    }
    return pointer1 + 1;
};
```
## 2.链表中倒数第k个节点-剑指offer22
### 双指针
```
class Solution {
    public ListNode getKthFromEnd(ListNode head, int k) {
        ListNode last = head;
        ListNode fast = head;       //设置快慢俩个指针，先让快指针移动k个单位
        if(head.next==null&&k==1){      
            return head;
        }
        for(;k>0;k--){
            fast = fast.next;
        }
        while(fast!=null){          //快慢指针一起向后移，直到快指针指向null，此时慢指针就是要找的倒数第k个
            last = last.next;
            fast = fast.next;
        }
        return last;
    }
}
```
### 使用栈
```
var getKthFromEnd = function(head, k) {
    let stack = [];
    let result;
    while(head){            //先将所有元素从头到尾入栈
        stack.push(head);
        head=head.next;
    }
    for(;k>0;k--){          //依次取出k个元素，结果为倒数第k个节点
        result = stack.pop();
    }
    return result;
};
```
对于要求返回值的，直接返回head.val,比如:**leetcode-面试题 02.02. 返回倒数第 k 个节点**
## 3.二维数组中的查找-剑指offer04
### 暴力遍历
```
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length===0) return false;
    for(let i =0;i<matrix.length;i++){
        for(let j = 0;j<matrix[0].length;j++){
            if(matrix[i][j]===target){
                return true;
            }
        }
    }
    return false;
};
```
#### 缺点：
复杂度过高，可以达到O(nm)，而且没有利用价值所给数组的已排序特性
### 双指针
```
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if(matrix == null || matrix.length == 0) {
            return false;
        }
        int width = matrix[0].length-1; 
        int height = matrix.length;   
        int row=0;
        while(row<height&&width>=0){
            if(matrix[row][width]>target){
                width--;
            }
            else if(matrix[row][width]<target){
                row++;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
```
#### 原理：
由于给定的二维数组具备每行从左到右递增以及每列从上到下递增的特点，当访问到一个元素时，可以排除数组中的部分元素。
从二维数组的右上角开始查找。如果当前元素等于目标值，则返回 true。如果当前元素大于目标值，则移到左边一列。如果当前元素小于目标值，则移到下边一行。
可以证明这种方法不会错过目标值。如果当前元素大于目标值，说明当前元素的下边的所有元素都一定大于目标值，因此往下查找不可能找到目标值，往左查找可能找到目标值。如果当前元素小于目标值，说明当前元素的左边的所有元素都一定小于目标值，因此往左查找不可能找到目标值，往下查找可能找到目标值
## 4.合并排序的数组-面试题10.01
### 合并后排序(mereg+sort)
```
var merge = function(A, m, B, n) {
    for(const i of B){
        A[m++]=i;
    }
    A.sort((a,b)=>a-b)
};
```
### 逆向双指针
```
class Solution {
    public void merge(int[] A, int m, int[] B, int n) {
        int lon = m+n-1;
        int n1 = n-1,m1=m-1;
        while(m1>=0||n1>=0){
            if(m1==-1){         //当A数组已经全部排序后，将B数组依次放入A前面
                A[lon--]=B[n1--];
            }
            else if(n1==-1){    //B数组为空时，将A数组全部放入A前面，也就是原地不动
                A[lon--]=A[m1--];
            }
            else if(B[n1]>A[m1]){
                A[lon--]=B[n1--];
            }
            else if(B[n1]<A[m1]){
                A[lon--]=A[m1--];
            }
            else{
                A[lon--]=B[n1--];
            }
        }
    }

}
```
#### 原理
因为A数组的空间足够大,所以指针设置为从后向前遍历，每次取两者之中的较大者放进 A 的最后面,不会出现A数组空间不足的现象
## 5.验证回文串-leetcode-125
### 双指针
```
var isPalindrome = function(s) {
    let news =s.replace(/[, .:@#$%^&*\-\[\]\{\}"`'\_\?;!\(\)]/g,"")   //去除掉所有非数字字母
    news = news.toLowerCase();      //全部转化为小写
    let num = news.length;
    for(let i=0;i<=news.length/2;i++){
        if(news[i]!==news[num-i-1]){
            return false;
        }
    }
    return true;
};
```
### java
```
class Solution {
    public boolean isPalindrome(String s) {
        if (s == null || s.length() == 0)
            return true;
        s = s.toLowerCase();
        for (int i = 0, j = s.length() - 1; i < j; i++, j--) {
            while (i < j && !Character.isLetterOrDigit(s.charAt(i)))
                i++;
            while (i < j && !Character.isLetterOrDigit(s.charAt(j)))
                j--;
            if (s.charAt(i) != s.charAt(j))
                return false;
        }
        return true;
    }
}
```
## 6.移动零-leetcode-283
### 双指针(java)
```
class Solution {
    public void moveZeroes(int[] nums) {
        int slow=0;
        for(int i = 0;i<nums.length;i++){
            if(nums[i]!=0){         //遍历数组，遇到非0元素则依次加入到slow指针处,遇到0元素只移动快指针
                nums[slow++]=nums[i];
            }
        }
        for(;slow<nums.length;slow++){   //遍历完一遍后,slow指针指向的位置后所有非0元素已经移动到最前面，此时进行补0
            nums[slow]=0;
        }
    }
}
```
#### 图解
![](https://pic.leetcode-cn.com/9669b4ffb158eaeeee6f0cd66a70f24411575edab1ab8a037c4c9084b1c743f5-283_1.gif)
### 双指针2
```
var moveZeroes = function(nums) {
    let slow=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            [nums[slow],nums[i]]=[nums[i],nums[slow]]   //当快指针指向的元素非零时，交换俩个元素，快慢指针一起向前移动
            slow++;
        }
    }                                                   //快指针指向的元素为0时，只移动快指针
};
```
#### 图解
![](https://pic.leetcode-cn.com/36d1ac5d689101cbf9947465e94753c626eab7fcb736ae2175f5d87ebc85fdf0-283_2.gif)
## 7.最接近的三数之和-leetcode-16
```
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);          //先对数组进行排序
        int result=nums[0] + nums[1] + nums[nums.length - 1];
        for(int i=0;i<nums.length-2;i++){
            int slow=i+1,fast=nums.length-1;   //头指针为每次遍历的i后一个元素为起点,快指针指向数组尾
            while(slow<fast){
                int val=nums[i]+nums[slow]+nums[fast];
                if(Math.abs(val-target)<Math.abs(result-target)){
                    result=val;                 //将新的三数之和与原始值比较，进而更新原始值
                }
                if(val>target){                 //如果结果比target大，则向前移动指针
                    fast--;
                }
                else if(val<target){
                    slow++;
                }
                else{
                    return val;                 //如果三数之和刚好为target，返回val，程序结束
                }
            }
        }
        return result;
    }
}
```