(function() {var implementors = {};
implementors["hashbrown"] = [{"text":"impl&lt;K, V, H&gt; Serialize for HashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Serialize + Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, H&gt; Serialize for HashSet&lt;T, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()