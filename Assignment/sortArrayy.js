	function first(arr,low,high,x,n)
	{
		if (high >= low) {
			// (low + high)/2;
			let mid = low + Math.floor((high - low) / 2);

			if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
				return mid;
			if (x > arr[mid])
				return first(arr, (mid + 1), high,x, n);
			return first(arr, low, (mid - 1), x, n);
		}
		return -1;
	}
	
	// Sort A1[0..m-1] according to the order
	// defined by A2[0..n-1].
	function sortAccording(A1,A2,m,n)
	{
		// The temp array is used to store a copy
		// of A1[] and visited[] is used to mark the
		// visited elements in temp[].
		let temp=[];
		let visited=[];
		
		for (let i = 0; i < m; i++)
		{
			temp[i] = A1[i];
			visited[i] = 0;
		}
		
		// Sort elements in temp
		temp.sort(function(a, b){return a-b});
		
		// for index of output which is sorted A1[]
		let ind = 0;
		
		// Consider all elements of A2[], find them
		// in temp[] and copy to A1[] in order.
		for (let i = 0; i < n; i++)
		{
			// Find index of the first occurrence
			// of A2[i] in temp
			let f = first(temp, 0, m - 1, A2[i], m);
			// If not present, no need to proceed
			if (f == -1)
			{
				continue;
			}
			// Copy all occurrences of A2[i] to A1[]
			for (let j = f; (j < m && temp[j] == A2[i]);j++)
			{
				A1[ind++] = temp[j];
				visited[j] = 1;
			}
		}
		// Now copy all items of temp[] which are
		// not present in A2[]
		for (let i = 0; i < m; i++)
		{
			if (visited[i] == 0)
				A1[ind++] = temp[i];
		}
		
	}
	
	// Utility function to print an array
	function printArray(arr,n)
	{
		for (let i = 0; i < n; i++)
		{
			console.log(arr[i] + " ");
			
		}
		
	}
	
	// Driver program to test above function.
	let A1=[2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8 ];
	let A2=[2, 1, 8, 3 ];
	
	let m = A1.length;
	let n = A2.length;
	console.log("Sorted array is");
	
	sortAccording(A1, A2, m, n);
	printArray(A1, m);
	

