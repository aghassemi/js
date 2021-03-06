// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

 /**
  * @summary Namespace naming defines the public interface for naming, including
  * the format of names, the APIs for manipulating the name as
  * well as all associated types for resolving, globbing and managing names.
  *
  * @description
  * <p>Namespace naming defines the public interface for naming, including
  * the format of names, the APIs for manipulating the name as
  * well as all associated types for resolving, globbing and managing names.</p>
  *
  * <p>Object names are 'resolved' using a MountTable to obtain a
  * MountedServer that RPC method invocations can be directed
  * at. MountTables may be mounted on each other to typically create a
  * hierarchy. The name resolution process can thus involve multiple
  * MountTables. Although it is expected that a hierarchy will be the
  * typical use, it is nonetheless possible to create a cyclic graph of
  * MountTables which will lead to name resolution errors at runtime.</p>
  *
  * <p>Object names are strings with / used to separate the components of
  * a name.  Names may be started with / and the address of a
  * MountTable or server, in which case they are considered 'rooted',
  * otherwise they are 'relative' to the MountTable used to resolve
  * them. Rooted names, unlike relative ones, have the same meaning
  * regardless of the context in which they are accessed.</p>
  *
  * <p>The first component of a rooted name is the address of the
  * MountTable to use for resolving the remaining components of the
  * name. The address may be the string representation of an Endpoint,
  * a &lt;host&gt;:&lt;port&gt;, or &lt;ip&gt;:&lt;port&gt;. In addition,
  * &lt;host&gt; or &lt;ip&gt; may be used without a &lt;port&gt; being
  * specified in which case a default port is used. The portion of the name
  * following the address is a relative name.</p>
  * <br>
  * Thus:
  * <br>
  * /host:port/a/b/c/d means starting at host:port resolve a/b/c/d and
  * return the terminating server and the relative path from that
  * server.
  *
  * @namespace
  * @name naming
  * @memberof module:vanadium
  */

var extend = require('xtend');

module.exports = extend(
  require('../gen-vdl/v.io/v23/naming'),
  require('./util')
);
