// This file was auto-generated by the veyron vdl tool.
// Source: cancel_collector.vdl

package test_service

import (
	// The non-user imports are prefixed with "__" to prevent collisions.
	__veyron2 "v.io/core/veyron2"
	__context "v.io/core/veyron2/context"
	__ipc "v.io/core/veyron2/ipc"
	__vdlutil "v.io/core/veyron2/vdl/vdlutil"
	__wiretype "v.io/core/veyron2/wiretype"
)

// TODO(toddw): Remove this line once the new signature support is done.
// It corrects a bug where __wiretype is unused in VDL pacakges where only
// bootstrap types are used on interfaces.
const _ = __wiretype.TypeIDInvalid

// CancelCollectorClientMethods is the client interface
// containing CancelCollector methods.
//
// CancelCollector is a test interface for use in testing cancellation and deadlines.
type CancelCollectorClientMethods interface {
	// A function that never returns, but records the status of the given key.
	NeverReturn(ctx __context.T, key int64, opts ...__ipc.CallOpt) error
	// Wait for the call with the given key to have the given status.  Possible statuses are:
	// "running", and, "cancelled".  Returns the number of nanoseconds left on
	// the deadline of the specified call when the call first began.
	WaitForStatus(ctx __context.T, key int64, status string, opts ...__ipc.CallOpt) (timeout int64, err error)
}

// CancelCollectorClientStub adds universal methods to CancelCollectorClientMethods.
type CancelCollectorClientStub interface {
	CancelCollectorClientMethods
	__ipc.UniversalServiceMethods
}

// CancelCollectorClient returns a client stub for CancelCollector.
func CancelCollectorClient(name string, opts ...__ipc.BindOpt) CancelCollectorClientStub {
	var client __ipc.Client
	for _, opt := range opts {
		if clientOpt, ok := opt.(__ipc.Client); ok {
			client = clientOpt
		}
	}
	return implCancelCollectorClientStub{name, client}
}

type implCancelCollectorClientStub struct {
	name   string
	client __ipc.Client
}

func (c implCancelCollectorClientStub) c(ctx __context.T) __ipc.Client {
	if c.client != nil {
		return c.client
	}
	return __veyron2.RuntimeFromContext(ctx).Client()
}

func (c implCancelCollectorClientStub) NeverReturn(ctx __context.T, i0 int64, opts ...__ipc.CallOpt) (err error) {
	var call __ipc.Call
	if call, err = c.c(ctx).StartCall(ctx, c.name, "NeverReturn", []interface{}{i0}, opts...); err != nil {
		return
	}
	if ierr := call.Finish(&err); ierr != nil {
		err = ierr
	}
	return
}

func (c implCancelCollectorClientStub) WaitForStatus(ctx __context.T, i0 int64, i1 string, opts ...__ipc.CallOpt) (o0 int64, err error) {
	var call __ipc.Call
	if call, err = c.c(ctx).StartCall(ctx, c.name, "WaitForStatus", []interface{}{i0, i1}, opts...); err != nil {
		return
	}
	if ierr := call.Finish(&o0, &err); ierr != nil {
		err = ierr
	}
	return
}

func (c implCancelCollectorClientStub) Signature(ctx __context.T, opts ...__ipc.CallOpt) (o0 __ipc.ServiceSignature, err error) {
	var call __ipc.Call
	if call, err = c.c(ctx).StartCall(ctx, c.name, "Signature", nil, opts...); err != nil {
		return
	}
	if ierr := call.Finish(&o0, &err); ierr != nil {
		err = ierr
	}
	return
}

// CancelCollectorServerMethods is the interface a server writer
// implements for CancelCollector.
//
// CancelCollector is a test interface for use in testing cancellation and deadlines.
type CancelCollectorServerMethods interface {
	// A function that never returns, but records the status of the given key.
	NeverReturn(ctx __ipc.ServerContext, key int64) error
	// Wait for the call with the given key to have the given status.  Possible statuses are:
	// "running", and, "cancelled".  Returns the number of nanoseconds left on
	// the deadline of the specified call when the call first began.
	WaitForStatus(ctx __ipc.ServerContext, key int64, status string) (timeout int64, err error)
}

// CancelCollectorServerStubMethods is the server interface containing
// CancelCollector methods, as expected by ipc.Server.
// There is no difference between this interface and CancelCollectorServerMethods
// since there are no streaming methods.
type CancelCollectorServerStubMethods CancelCollectorServerMethods

// CancelCollectorServerStub adds universal methods to CancelCollectorServerStubMethods.
type CancelCollectorServerStub interface {
	CancelCollectorServerStubMethods
	// Describe the CancelCollector interfaces.
	Describe__() []__ipc.InterfaceDesc
	// Signature will be replaced with Describe__.
	Signature(ctx __ipc.ServerContext) (__ipc.ServiceSignature, error)
}

// CancelCollectorServer returns a server stub for CancelCollector.
// It converts an implementation of CancelCollectorServerMethods into
// an object that may be used by ipc.Server.
func CancelCollectorServer(impl CancelCollectorServerMethods) CancelCollectorServerStub {
	stub := implCancelCollectorServerStub{
		impl: impl,
	}
	// Initialize GlobState; always check the stub itself first, to handle the
	// case where the user has the Glob method defined in their VDL source.
	if gs := __ipc.NewGlobState(stub); gs != nil {
		stub.gs = gs
	} else if gs := __ipc.NewGlobState(impl); gs != nil {
		stub.gs = gs
	}
	return stub
}

type implCancelCollectorServerStub struct {
	impl CancelCollectorServerMethods
	gs   *__ipc.GlobState
}

func (s implCancelCollectorServerStub) NeverReturn(ctx __ipc.ServerContext, i0 int64) error {
	return s.impl.NeverReturn(ctx, i0)
}

func (s implCancelCollectorServerStub) WaitForStatus(ctx __ipc.ServerContext, i0 int64, i1 string) (int64, error) {
	return s.impl.WaitForStatus(ctx, i0, i1)
}

func (s implCancelCollectorServerStub) Globber() *__ipc.GlobState {
	return s.gs
}

func (s implCancelCollectorServerStub) Describe__() []__ipc.InterfaceDesc {
	return []__ipc.InterfaceDesc{CancelCollectorDesc}
}

// CancelCollectorDesc describes the CancelCollector interface.
var CancelCollectorDesc __ipc.InterfaceDesc = descCancelCollector

// descCancelCollector hides the desc to keep godoc clean.
var descCancelCollector = __ipc.InterfaceDesc{
	Name:    "CancelCollector",
	PkgPath: "test_service",
	Doc:     "// CancelCollector is a test interface for use in testing cancellation and deadlines.",
	Methods: []__ipc.MethodDesc{
		{
			Name: "NeverReturn",
			Doc:  "// A function that never returns, but records the status of the given key.",
			InArgs: []__ipc.ArgDesc{
				{"key", ``}, // int64
			},
			OutArgs: []__ipc.ArgDesc{
				{"", ``}, // error
			},
		},
		{
			Name: "WaitForStatus",
			Doc:  "// Wait for the call with the given key to have the given status.  Possible statuses are:\n// \"running\", and, \"cancelled\".  Returns the number of nanoseconds left on\n// the deadline of the specified call when the call first began.",
			InArgs: []__ipc.ArgDesc{
				{"key", ``},    // int64
				{"status", ``}, // string
			},
			OutArgs: []__ipc.ArgDesc{
				{"timeout", ``}, // int64
				{"err", ``},     // error
			},
		},
	},
}

func (s implCancelCollectorServerStub) Signature(ctx __ipc.ServerContext) (__ipc.ServiceSignature, error) {
	// TODO(toddw): Replace with new Describe__ implementation.
	result := __ipc.ServiceSignature{Methods: make(map[string]__ipc.MethodSignature)}
	result.Methods["NeverReturn"] = __ipc.MethodSignature{
		InArgs: []__ipc.MethodArgument{
			{Name: "key", Type: 37},
		},
		OutArgs: []__ipc.MethodArgument{
			{Name: "", Type: 65},
		},
	}
	result.Methods["WaitForStatus"] = __ipc.MethodSignature{
		InArgs: []__ipc.MethodArgument{
			{Name: "key", Type: 37},
			{Name: "status", Type: 3},
		},
		OutArgs: []__ipc.MethodArgument{
			{Name: "timeout", Type: 37},
			{Name: "err", Type: 65},
		},
	}

	result.TypeDefs = []__vdlutil.Any{
		__wiretype.NamedPrimitiveType{Type: 0x1, Name: "error", Tags: []string(nil)}}

	return result, nil
}
