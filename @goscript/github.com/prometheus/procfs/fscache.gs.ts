// Generated file based on fscache.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as util from "@goscript/github.com/prometheus/procfs/internal/util/index.js"

import * as fs2 from "@goscript/github.com/prometheus/procfs/internal/fs/index.js"

import * as net from "@goscript/net/index.js"

import type * as __goscript_arp from "./arp.gs.ts"

import type * as __goscript_buddyinfo from "./buddyinfo.gs.ts"

import type * as __goscript_crypto from "./crypto.gs.ts"

import type * as __goscript_fs from "./fs.gs.ts"

import type * as __goscript_ipvs from "./ipvs.gs.ts"

import type * as __goscript_kernel_random from "./kernel_random.gs.ts"

import type * as __goscript_loadavg from "./loadavg.gs.ts"

import type * as __goscript_mdstat from "./mdstat.gs.ts"

import type * as __goscript_meminfo from "./meminfo.gs.ts"

import type * as __goscript_mountinfo from "./mountinfo.gs.ts"

import * as __goscript_mountstats from "./mountstats.gs.ts"

import type * as __goscript_net_conntrackstat from "./net_conntrackstat.gs.ts"

import type * as __goscript_net_dev from "./net_dev.gs.ts"

import type * as __goscript_net_ip_socket from "./net_ip_socket.gs.ts"

import * as __goscript_net_protocols from "./net_protocols.gs.ts"

import * as __goscript_net_sockstat from "./net_sockstat.gs.ts"

import type * as __goscript_net_softnet from "./net_softnet.gs.ts"

import type * as __goscript_net_tcp from "./net_tcp.gs.ts"

import type * as __goscript_net_udp from "./net_udp.gs.ts"

import * as __goscript_net_unix from "./net_unix.gs.ts"

import type * as __goscript_proc from "./proc.gs.ts"

import type * as __goscript_proc_cgroup from "./proc_cgroup.gs.ts"

import type * as __goscript_proc_environ from "./proc_environ.gs.ts"

import * as __goscript_proc_fdinfo from "./proc_fdinfo.gs.ts"

import type * as __goscript_proc_io from "./proc_io.gs.ts"

import type * as __goscript_proc_limits from "./proc_limits.gs.ts"

import type * as __goscript_proc_ns from "./proc_ns.gs.ts"

import * as __goscript_proc_psi from "./proc_psi.gs.ts"

import type * as __goscript_proc_smaps from "./proc_smaps.gs.ts"

import type * as __goscript_proc_stat from "./proc_stat.gs.ts"

import type * as __goscript_proc_status from "./proc_status.gs.ts"

import * as __goscript_schedstat from "./schedstat.gs.ts"

import * as __goscript_slab from "./slab.gs.ts"

import * as __goscript_stat from "./stat.gs.ts"

import type * as __goscript_swaps from "./swaps.gs.ts"

import type * as __goscript_vm from "./vm.gs.ts"

import type * as __goscript_xfrm from "./xfrm.gs.ts"

import type * as __goscript_zoneinfo from "./zoneinfo.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/prometheus/procfs/internal/util/index.js"
import "@goscript/github.com/prometheus/procfs/internal/fs/index.js"
import "@goscript/net/index.js"
import "./mountstats.gs.ts"
import "./net_protocols.gs.ts"
import "./net_sockstat.gs.ts"
import "./net_unix.gs.ts"
import "./proc_fdinfo.gs.ts"
import "./proc_psi.gs.ts"
import "./schedstat.gs.ts"
import "./slab.gs.ts"
import "./stat.gs.ts"

$.registerTypePackagePath("github.com/prometheus/procfs", ["procfs.Fscacheinfo"])

export class Fscacheinfo {
	// Number of index cookies allocated
	public get IndexCookiesAllocated(): bigint {
		return this._fields.IndexCookiesAllocated
	}

	public set IndexCookiesAllocated(value: bigint) {
		this._fields.IndexCookiesAllocated = value
	}

	// data storage cookies allocated
	public get DataStorageCookiesAllocated(): bigint {
		return this._fields.DataStorageCookiesAllocated
	}

	public set DataStorageCookiesAllocated(value: bigint) {
		this._fields.DataStorageCookiesAllocated = value
	}

	// Number of special cookies allocated
	public get SpecialCookiesAllocated(): bigint {
		return this._fields.SpecialCookiesAllocated
	}

	public set SpecialCookiesAllocated(value: bigint) {
		this._fields.SpecialCookiesAllocated = value
	}

	// Number of objects allocated
	public get ObjectsAllocated(): bigint {
		return this._fields.ObjectsAllocated
	}

	public set ObjectsAllocated(value: bigint) {
		this._fields.ObjectsAllocated = value
	}

	// Number of object allocation failures
	public get ObjectAllocationsFailure(): bigint {
		return this._fields.ObjectAllocationsFailure
	}

	public set ObjectAllocationsFailure(value: bigint) {
		this._fields.ObjectAllocationsFailure = value
	}

	// Number of objects that reached the available state
	public get ObjectsAvailable(): bigint {
		return this._fields.ObjectsAvailable
	}

	public set ObjectsAvailable(value: bigint) {
		this._fields.ObjectsAvailable = value
	}

	// Number of objects that reached the dead state
	public get ObjectsDead(): bigint {
		return this._fields.ObjectsDead
	}

	public set ObjectsDead(value: bigint) {
		this._fields.ObjectsDead = value
	}

	// Number of objects that didn't have a coherency check
	public get ObjectsWithoutCoherencyCheck(): bigint {
		return this._fields.ObjectsWithoutCoherencyCheck
	}

	public set ObjectsWithoutCoherencyCheck(value: bigint) {
		this._fields.ObjectsWithoutCoherencyCheck = value
	}

	// Number of objects that passed a coherency check
	public get ObjectsWithCoherencyCheck(): bigint {
		return this._fields.ObjectsWithCoherencyCheck
	}

	public set ObjectsWithCoherencyCheck(value: bigint) {
		this._fields.ObjectsWithCoherencyCheck = value
	}

	// Number of objects that needed a coherency data update
	public get ObjectsNeedCoherencyCheckUpdate(): bigint {
		return this._fields.ObjectsNeedCoherencyCheckUpdate
	}

	public set ObjectsNeedCoherencyCheckUpdate(value: bigint) {
		this._fields.ObjectsNeedCoherencyCheckUpdate = value
	}

	// Number of objects that were declared obsolete
	public get ObjectsDeclaredObsolete(): bigint {
		return this._fields.ObjectsDeclaredObsolete
	}

	public set ObjectsDeclaredObsolete(value: bigint) {
		this._fields.ObjectsDeclaredObsolete = value
	}

	// Number of pages marked as being cached
	public get PagesMarkedAsBeingCached(): bigint {
		return this._fields.PagesMarkedAsBeingCached
	}

	public set PagesMarkedAsBeingCached(value: bigint) {
		this._fields.PagesMarkedAsBeingCached = value
	}

	// Number of uncache page requests seen
	public get UncachePagesRequestSeen(): bigint {
		return this._fields.UncachePagesRequestSeen
	}

	public set UncachePagesRequestSeen(value: bigint) {
		this._fields.UncachePagesRequestSeen = value
	}

	// Number of acquire cookie requests seen
	public get AcquireCookiesRequestSeen(): bigint {
		return this._fields.AcquireCookiesRequestSeen
	}

	public set AcquireCookiesRequestSeen(value: bigint) {
		this._fields.AcquireCookiesRequestSeen = value
	}

	// Number of acq reqs given a NULL parent
	public get AcquireRequestsWithNullParent(): bigint {
		return this._fields.AcquireRequestsWithNullParent
	}

	public set AcquireRequestsWithNullParent(value: bigint) {
		this._fields.AcquireRequestsWithNullParent = value
	}

	// Number of acq reqs rejected due to no cache available
	public get AcquireRequestsRejectedNoCacheAvailable(): bigint {
		return this._fields.AcquireRequestsRejectedNoCacheAvailable
	}

	public set AcquireRequestsRejectedNoCacheAvailable(value: bigint) {
		this._fields.AcquireRequestsRejectedNoCacheAvailable = value
	}

	// Number of acq reqs succeeded
	public get AcquireRequestsSucceeded(): bigint {
		return this._fields.AcquireRequestsSucceeded
	}

	public set AcquireRequestsSucceeded(value: bigint) {
		this._fields.AcquireRequestsSucceeded = value
	}

	// Number of acq reqs rejected due to error
	public get AcquireRequestsRejectedDueToError(): bigint {
		return this._fields.AcquireRequestsRejectedDueToError
	}

	public set AcquireRequestsRejectedDueToError(value: bigint) {
		this._fields.AcquireRequestsRejectedDueToError = value
	}

	// Number of acq reqs failed on ENOMEM
	public get AcquireRequestsFailedDueToEnomem(): bigint {
		return this._fields.AcquireRequestsFailedDueToEnomem
	}

	public set AcquireRequestsFailedDueToEnomem(value: bigint) {
		this._fields.AcquireRequestsFailedDueToEnomem = value
	}

	// Number of lookup calls made on cache backends
	public get LookupsNumber(): bigint {
		return this._fields.LookupsNumber
	}

	public set LookupsNumber(value: bigint) {
		this._fields.LookupsNumber = value
	}

	// Number of negative lookups made
	public get LookupsNegative(): bigint {
		return this._fields.LookupsNegative
	}

	public set LookupsNegative(value: bigint) {
		this._fields.LookupsNegative = value
	}

	// Number of positive lookups made
	public get LookupsPositive(): bigint {
		return this._fields.LookupsPositive
	}

	public set LookupsPositive(value: bigint) {
		this._fields.LookupsPositive = value
	}

	// Number of objects created by lookup
	public get ObjectsCreatedByLookup(): bigint {
		return this._fields.ObjectsCreatedByLookup
	}

	public set ObjectsCreatedByLookup(value: bigint) {
		this._fields.ObjectsCreatedByLookup = value
	}

	// Number of lookups timed out and requeued
	public get LookupsTimedOutAndRequed(): bigint {
		return this._fields.LookupsTimedOutAndRequed
	}

	public set LookupsTimedOutAndRequed(value: bigint) {
		this._fields.LookupsTimedOutAndRequed = value
	}

	public get InvalidationsNumber(): bigint {
		return this._fields.InvalidationsNumber
	}

	public set InvalidationsNumber(value: bigint) {
		this._fields.InvalidationsNumber = value
	}

	public get InvalidationsRunning(): bigint {
		return this._fields.InvalidationsRunning
	}

	public set InvalidationsRunning(value: bigint) {
		this._fields.InvalidationsRunning = value
	}

	// Number of update cookie requests seen
	public get UpdateCookieRequestSeen(): bigint {
		return this._fields.UpdateCookieRequestSeen
	}

	public set UpdateCookieRequestSeen(value: bigint) {
		this._fields.UpdateCookieRequestSeen = value
	}

	// Number of upd reqs given a NULL parent
	public get UpdateRequestsWithNullParent(): bigint {
		return this._fields.UpdateRequestsWithNullParent
	}

	public set UpdateRequestsWithNullParent(value: bigint) {
		this._fields.UpdateRequestsWithNullParent = value
	}

	// Number of upd reqs granted CPU time
	public get UpdateRequestsRunning(): bigint {
		return this._fields.UpdateRequestsRunning
	}

	public set UpdateRequestsRunning(value: bigint) {
		this._fields.UpdateRequestsRunning = value
	}

	// Number of relinquish cookie requests seen
	public get RelinquishCookiesRequestSeen(): bigint {
		return this._fields.RelinquishCookiesRequestSeen
	}

	public set RelinquishCookiesRequestSeen(value: bigint) {
		this._fields.RelinquishCookiesRequestSeen = value
	}

	// Number of rlq reqs given a NULL parent
	public get RelinquishCookiesWithNullParent(): bigint {
		return this._fields.RelinquishCookiesWithNullParent
	}

	public set RelinquishCookiesWithNullParent(value: bigint) {
		this._fields.RelinquishCookiesWithNullParent = value
	}

	// Number of rlq reqs waited on completion of creation
	public get RelinquishRequestsWaitingCompleteCreation(): bigint {
		return this._fields.RelinquishRequestsWaitingCompleteCreation
	}

	public set RelinquishRequestsWaitingCompleteCreation(value: bigint) {
		this._fields.RelinquishRequestsWaitingCompleteCreation = value
	}

	// Relinqs rtr
	public get RelinquishRetries(): bigint {
		return this._fields.RelinquishRetries
	}

	public set RelinquishRetries(value: bigint) {
		this._fields.RelinquishRetries = value
	}

	// Number of attribute changed requests seen
	public get AttributeChangedRequestsSeen(): bigint {
		return this._fields.AttributeChangedRequestsSeen
	}

	public set AttributeChangedRequestsSeen(value: bigint) {
		this._fields.AttributeChangedRequestsSeen = value
	}

	// Number of attr changed requests queued
	public get AttributeChangedRequestsQueued(): bigint {
		return this._fields.AttributeChangedRequestsQueued
	}

	public set AttributeChangedRequestsQueued(value: bigint) {
		this._fields.AttributeChangedRequestsQueued = value
	}

	// Number of attr changed rejected -ENOBUFS
	public get AttributeChangedRejectDueToEnobufs(): bigint {
		return this._fields.AttributeChangedRejectDueToEnobufs
	}

	public set AttributeChangedRejectDueToEnobufs(value: bigint) {
		this._fields.AttributeChangedRejectDueToEnobufs = value
	}

	// Number of attr changed failed -ENOMEM
	public get AttributeChangedFailedDueToEnomem(): bigint {
		return this._fields.AttributeChangedFailedDueToEnomem
	}

	public set AttributeChangedFailedDueToEnomem(value: bigint) {
		this._fields.AttributeChangedFailedDueToEnomem = value
	}

	// Number of attr changed ops given CPU time
	public get AttributeChangedOps(): bigint {
		return this._fields.AttributeChangedOps
	}

	public set AttributeChangedOps(value: bigint) {
		this._fields.AttributeChangedOps = value
	}

	// Number of allocation requests seen
	public get AllocationRequestsSeen(): bigint {
		return this._fields.AllocationRequestsSeen
	}

	public set AllocationRequestsSeen(value: bigint) {
		this._fields.AllocationRequestsSeen = value
	}

	// Number of successful alloc reqs
	public get AllocationOkRequests(): bigint {
		return this._fields.AllocationOkRequests
	}

	public set AllocationOkRequests(value: bigint) {
		this._fields.AllocationOkRequests = value
	}

	// Number of alloc reqs that waited on lookup completion
	public get AllocationWaitingOnLookup(): bigint {
		return this._fields.AllocationWaitingOnLookup
	}

	public set AllocationWaitingOnLookup(value: bigint) {
		this._fields.AllocationWaitingOnLookup = value
	}

	// Number of alloc reqs rejected -ENOBUFS
	public get AllocationsRejectedDueToEnobufs(): bigint {
		return this._fields.AllocationsRejectedDueToEnobufs
	}

	public set AllocationsRejectedDueToEnobufs(value: bigint) {
		this._fields.AllocationsRejectedDueToEnobufs = value
	}

	// Number of alloc reqs aborted -ERESTARTSYS
	public get AllocationsAbortedDueToErestartsys(): bigint {
		return this._fields.AllocationsAbortedDueToErestartsys
	}

	public set AllocationsAbortedDueToErestartsys(value: bigint) {
		this._fields.AllocationsAbortedDueToErestartsys = value
	}

	// Number of alloc reqs submitted
	public get AllocationOperationsSubmitted(): bigint {
		return this._fields.AllocationOperationsSubmitted
	}

	public set AllocationOperationsSubmitted(value: bigint) {
		this._fields.AllocationOperationsSubmitted = value
	}

	// Number of alloc reqs waited for CPU time
	public get AllocationsWaitedForCPU(): bigint {
		return this._fields.AllocationsWaitedForCPU
	}

	public set AllocationsWaitedForCPU(value: bigint) {
		this._fields.AllocationsWaitedForCPU = value
	}

	// Number of alloc reqs aborted due to object death
	public get AllocationsAbortedDueToObjectDeath(): bigint {
		return this._fields.AllocationsAbortedDueToObjectDeath
	}

	public set AllocationsAbortedDueToObjectDeath(value: bigint) {
		this._fields.AllocationsAbortedDueToObjectDeath = value
	}

	// Number of retrieval (read) requests seen
	public get RetrievalsReadRequests(): bigint {
		return this._fields.RetrievalsReadRequests
	}

	public set RetrievalsReadRequests(value: bigint) {
		this._fields.RetrievalsReadRequests = value
	}

	// Number of successful retr reqs
	public get RetrievalsOk(): bigint {
		return this._fields.RetrievalsOk
	}

	public set RetrievalsOk(value: bigint) {
		this._fields.RetrievalsOk = value
	}

	// Number of retr reqs that waited on lookup completion
	public get RetrievalsWaitingLookupCompletion(): bigint {
		return this._fields.RetrievalsWaitingLookupCompletion
	}

	public set RetrievalsWaitingLookupCompletion(value: bigint) {
		this._fields.RetrievalsWaitingLookupCompletion = value
	}

	// Number of retr reqs returned -ENODATA
	public get RetrievalsReturnedEnodata(): bigint {
		return this._fields.RetrievalsReturnedEnodata
	}

	public set RetrievalsReturnedEnodata(value: bigint) {
		this._fields.RetrievalsReturnedEnodata = value
	}

	// Number of retr reqs rejected -ENOBUFS
	public get RetrievalsRejectedDueToEnobufs(): bigint {
		return this._fields.RetrievalsRejectedDueToEnobufs
	}

	public set RetrievalsRejectedDueToEnobufs(value: bigint) {
		this._fields.RetrievalsRejectedDueToEnobufs = value
	}

	// Number of retr reqs aborted -ERESTARTSYS
	public get RetrievalsAbortedDueToErestartsys(): bigint {
		return this._fields.RetrievalsAbortedDueToErestartsys
	}

	public set RetrievalsAbortedDueToErestartsys(value: bigint) {
		this._fields.RetrievalsAbortedDueToErestartsys = value
	}

	// Number of retr reqs failed -ENOMEM
	public get RetrievalsFailedDueToEnomem(): bigint {
		return this._fields.RetrievalsFailedDueToEnomem
	}

	public set RetrievalsFailedDueToEnomem(value: bigint) {
		this._fields.RetrievalsFailedDueToEnomem = value
	}

	// Number of retr reqs submitted
	public get RetrievalsRequests(): bigint {
		return this._fields.RetrievalsRequests
	}

	public set RetrievalsRequests(value: bigint) {
		this._fields.RetrievalsRequests = value
	}

	// Number of retr reqs waited for CPU time
	public get RetrievalsWaitingCPU(): bigint {
		return this._fields.RetrievalsWaitingCPU
	}

	public set RetrievalsWaitingCPU(value: bigint) {
		this._fields.RetrievalsWaitingCPU = value
	}

	// Number of retr reqs aborted due to object death
	public get RetrievalsAbortedDueToObjectDeath(): bigint {
		return this._fields.RetrievalsAbortedDueToObjectDeath
	}

	public set RetrievalsAbortedDueToObjectDeath(value: bigint) {
		this._fields.RetrievalsAbortedDueToObjectDeath = value
	}

	// Number of storage (write) requests seen
	public get StoreWriteRequests(): bigint {
		return this._fields.StoreWriteRequests
	}

	public set StoreWriteRequests(value: bigint) {
		this._fields.StoreWriteRequests = value
	}

	// Number of successful store reqs
	public get StoreSuccessfulRequests(): bigint {
		return this._fields.StoreSuccessfulRequests
	}

	public set StoreSuccessfulRequests(value: bigint) {
		this._fields.StoreSuccessfulRequests = value
	}

	// Number of store reqs on a page already pending storage
	public get StoreRequestsOnPendingStorage(): bigint {
		return this._fields.StoreRequestsOnPendingStorage
	}

	public set StoreRequestsOnPendingStorage(value: bigint) {
		this._fields.StoreRequestsOnPendingStorage = value
	}

	// Number of store reqs rejected -ENOBUFS
	public get StoreRequestsRejectedDueToEnobufs(): bigint {
		return this._fields.StoreRequestsRejectedDueToEnobufs
	}

	public set StoreRequestsRejectedDueToEnobufs(value: bigint) {
		this._fields.StoreRequestsRejectedDueToEnobufs = value
	}

	// Number of store reqs failed -ENOMEM
	public get StoreRequestsFailedDueToEnomem(): bigint {
		return this._fields.StoreRequestsFailedDueToEnomem
	}

	public set StoreRequestsFailedDueToEnomem(value: bigint) {
		this._fields.StoreRequestsFailedDueToEnomem = value
	}

	// Number of store reqs submitted
	public get StoreRequestsSubmitted(): bigint {
		return this._fields.StoreRequestsSubmitted
	}

	public set StoreRequestsSubmitted(value: bigint) {
		this._fields.StoreRequestsSubmitted = value
	}

	// Number of store reqs granted CPU time
	public get StoreRequestsRunning(): bigint {
		return this._fields.StoreRequestsRunning
	}

	public set StoreRequestsRunning(value: bigint) {
		this._fields.StoreRequestsRunning = value
	}

	// Number of pages given store req processing time
	public get StorePagesWithRequestsProcessing(): bigint {
		return this._fields.StorePagesWithRequestsProcessing
	}

	public set StorePagesWithRequestsProcessing(value: bigint) {
		this._fields.StorePagesWithRequestsProcessing = value
	}

	// Number of store reqs deleted from tracking tree
	public get StoreRequestsDeleted(): bigint {
		return this._fields.StoreRequestsDeleted
	}

	public set StoreRequestsDeleted(value: bigint) {
		this._fields.StoreRequestsDeleted = value
	}

	// Number of store reqs over store limit
	public get StoreRequestsOverStoreLimit(): bigint {
		return this._fields.StoreRequestsOverStoreLimit
	}

	public set StoreRequestsOverStoreLimit(value: bigint) {
		this._fields.StoreRequestsOverStoreLimit = value
	}

	// Number of release reqs against pages with no pending store
	public get ReleaseRequestsAgainstPagesWithNoPendingStorage(): bigint {
		return this._fields.ReleaseRequestsAgainstPagesWithNoPendingStorage
	}

	public set ReleaseRequestsAgainstPagesWithNoPendingStorage(value: bigint) {
		this._fields.ReleaseRequestsAgainstPagesWithNoPendingStorage = value
	}

	// Number of release reqs against pages stored by time lock granted
	public get ReleaseRequestsAgainstPagesStoredByTimeLockGranted(): bigint {
		return this._fields.ReleaseRequestsAgainstPagesStoredByTimeLockGranted
	}

	public set ReleaseRequestsAgainstPagesStoredByTimeLockGranted(value: bigint) {
		this._fields.ReleaseRequestsAgainstPagesStoredByTimeLockGranted = value
	}

	// Number of release reqs ignored due to in-progress store
	public get ReleaseRequestsIgnoredDueToInProgressStore(): bigint {
		return this._fields.ReleaseRequestsIgnoredDueToInProgressStore
	}

	public set ReleaseRequestsIgnoredDueToInProgressStore(value: bigint) {
		this._fields.ReleaseRequestsIgnoredDueToInProgressStore = value
	}

	// Number of page stores cancelled due to release req
	public get PageStoresCancelledByReleaseRequests(): bigint {
		return this._fields.PageStoresCancelledByReleaseRequests
	}

	public set PageStoresCancelledByReleaseRequests(value: bigint) {
		this._fields.PageStoresCancelledByReleaseRequests = value
	}

	public get VmscanWaiting(): bigint {
		return this._fields.VmscanWaiting
	}

	public set VmscanWaiting(value: bigint) {
		this._fields.VmscanWaiting = value
	}

	// Number of times async ops added to pending queues
	public get OpsPending(): bigint {
		return this._fields.OpsPending
	}

	public set OpsPending(value: bigint) {
		this._fields.OpsPending = value
	}

	// Number of times async ops given CPU time
	public get OpsRunning(): bigint {
		return this._fields.OpsRunning
	}

	public set OpsRunning(value: bigint) {
		this._fields.OpsRunning = value
	}

	// Number of times async ops queued for processing
	public get OpsEnqueued(): bigint {
		return this._fields.OpsEnqueued
	}

	public set OpsEnqueued(value: bigint) {
		this._fields.OpsEnqueued = value
	}

	// Number of async ops cancelled
	public get OpsCancelled(): bigint {
		return this._fields.OpsCancelled
	}

	public set OpsCancelled(value: bigint) {
		this._fields.OpsCancelled = value
	}

	// Number of async ops rejected due to object lookup/create failure
	public get OpsRejected(): bigint {
		return this._fields.OpsRejected
	}

	public set OpsRejected(value: bigint) {
		this._fields.OpsRejected = value
	}

	// Number of async ops initialised
	public get OpsInitialised(): bigint {
		return this._fields.OpsInitialised
	}

	public set OpsInitialised(value: bigint) {
		this._fields.OpsInitialised = value
	}

	// Number of async ops queued for deferred release
	public get OpsDeferred(): bigint {
		return this._fields.OpsDeferred
	}

	public set OpsDeferred(value: bigint) {
		this._fields.OpsDeferred = value
	}

	// Number of async ops released (should equal ini=N when idle)
	public get OpsReleased(): bigint {
		return this._fields.OpsReleased
	}

	public set OpsReleased(value: bigint) {
		this._fields.OpsReleased = value
	}

	// Number of deferred-release async ops garbage collected
	public get OpsGarbageCollected(): bigint {
		return this._fields.OpsGarbageCollected
	}

	public set OpsGarbageCollected(value: bigint) {
		this._fields.OpsGarbageCollected = value
	}

	// Number of in-progress alloc_object() cache ops
	public get CacheopAllocationsinProgress(): bigint {
		return this._fields.CacheopAllocationsinProgress
	}

	public set CacheopAllocationsinProgress(value: bigint) {
		this._fields.CacheopAllocationsinProgress = value
	}

	// Number of in-progress lookup_object() cache ops
	public get CacheopLookupObjectInProgress(): bigint {
		return this._fields.CacheopLookupObjectInProgress
	}

	public set CacheopLookupObjectInProgress(value: bigint) {
		this._fields.CacheopLookupObjectInProgress = value
	}

	// Number of in-progress lookup_complete() cache ops
	public get CacheopLookupCompleteInPorgress(): bigint {
		return this._fields.CacheopLookupCompleteInPorgress
	}

	public set CacheopLookupCompleteInPorgress(value: bigint) {
		this._fields.CacheopLookupCompleteInPorgress = value
	}

	// Number of in-progress grab_object() cache ops
	public get CacheopGrabObjectInProgress(): bigint {
		return this._fields.CacheopGrabObjectInProgress
	}

	public set CacheopGrabObjectInProgress(value: bigint) {
		this._fields.CacheopGrabObjectInProgress = value
	}

	public get CacheopInvalidations(): bigint {
		return this._fields.CacheopInvalidations
	}

	public set CacheopInvalidations(value: bigint) {
		this._fields.CacheopInvalidations = value
	}

	// Number of in-progress update_object() cache ops
	public get CacheopUpdateObjectInProgress(): bigint {
		return this._fields.CacheopUpdateObjectInProgress
	}

	public set CacheopUpdateObjectInProgress(value: bigint) {
		this._fields.CacheopUpdateObjectInProgress = value
	}

	// Number of in-progress drop_object() cache ops
	public get CacheopDropObjectInProgress(): bigint {
		return this._fields.CacheopDropObjectInProgress
	}

	public set CacheopDropObjectInProgress(value: bigint) {
		this._fields.CacheopDropObjectInProgress = value
	}

	// Number of in-progress put_object() cache ops
	public get CacheopPutObjectInProgress(): bigint {
		return this._fields.CacheopPutObjectInProgress
	}

	public set CacheopPutObjectInProgress(value: bigint) {
		this._fields.CacheopPutObjectInProgress = value
	}

	// Number of in-progress attr_changed() cache ops
	public get CacheopAttributeChangeInProgress(): bigint {
		return this._fields.CacheopAttributeChangeInProgress
	}

	public set CacheopAttributeChangeInProgress(value: bigint) {
		this._fields.CacheopAttributeChangeInProgress = value
	}

	// Number of in-progress sync_cache() cache ops
	public get CacheopSyncCacheInProgress(): bigint {
		return this._fields.CacheopSyncCacheInProgress
	}

	public set CacheopSyncCacheInProgress(value: bigint) {
		this._fields.CacheopSyncCacheInProgress = value
	}

	// Number of in-progress read_or_alloc_page() cache ops
	public get CacheopReadOrAllocPageInProgress(): bigint {
		return this._fields.CacheopReadOrAllocPageInProgress
	}

	public set CacheopReadOrAllocPageInProgress(value: bigint) {
		this._fields.CacheopReadOrAllocPageInProgress = value
	}

	// Number of in-progress read_or_alloc_pages() cache ops
	public get CacheopReadOrAllocPagesInProgress(): bigint {
		return this._fields.CacheopReadOrAllocPagesInProgress
	}

	public set CacheopReadOrAllocPagesInProgress(value: bigint) {
		this._fields.CacheopReadOrAllocPagesInProgress = value
	}

	// Number of in-progress allocate_page() cache ops
	public get CacheopAllocatePageInProgress(): bigint {
		return this._fields.CacheopAllocatePageInProgress
	}

	public set CacheopAllocatePageInProgress(value: bigint) {
		this._fields.CacheopAllocatePageInProgress = value
	}

	// Number of in-progress allocate_pages() cache ops
	public get CacheopAllocatePagesInProgress(): bigint {
		return this._fields.CacheopAllocatePagesInProgress
	}

	public set CacheopAllocatePagesInProgress(value: bigint) {
		this._fields.CacheopAllocatePagesInProgress = value
	}

	// Number of in-progress write_page() cache ops
	public get CacheopWritePagesInProgress(): bigint {
		return this._fields.CacheopWritePagesInProgress
	}

	public set CacheopWritePagesInProgress(value: bigint) {
		this._fields.CacheopWritePagesInProgress = value
	}

	// Number of in-progress uncache_page() cache ops
	public get CacheopUncachePagesInProgress(): bigint {
		return this._fields.CacheopUncachePagesInProgress
	}

	public set CacheopUncachePagesInProgress(value: bigint) {
		this._fields.CacheopUncachePagesInProgress = value
	}

	// Number of in-progress dissociate_pages() cache ops
	public get CacheopDissociatePagesInProgress(): bigint {
		return this._fields.CacheopDissociatePagesInProgress
	}

	public set CacheopDissociatePagesInProgress(value: bigint) {
		this._fields.CacheopDissociatePagesInProgress = value
	}

	// Number of object lookups/creations rejected due to lack of space
	public get CacheevLookupsAndCreationsRejectedLackSpace(): bigint {
		return this._fields.CacheevLookupsAndCreationsRejectedLackSpace
	}

	public set CacheevLookupsAndCreationsRejectedLackSpace(value: bigint) {
		this._fields.CacheevLookupsAndCreationsRejectedLackSpace = value
	}

	// Number of stale objects deleted
	public get CacheevStaleObjectsDeleted(): bigint {
		return this._fields.CacheevStaleObjectsDeleted
	}

	public set CacheevStaleObjectsDeleted(value: bigint) {
		this._fields.CacheevStaleObjectsDeleted = value
	}

	// Number of objects retired when relinquished
	public get CacheevRetiredWhenReliquished(): bigint {
		return this._fields.CacheevRetiredWhenReliquished
	}

	public set CacheevRetiredWhenReliquished(value: bigint) {
		this._fields.CacheevRetiredWhenReliquished = value
	}

	// Number of objects culled
	public get CacheevObjectsCulled(): bigint {
		return this._fields.CacheevObjectsCulled
	}

	public set CacheevObjectsCulled(value: bigint) {
		this._fields.CacheevObjectsCulled = value
	}

	public _fields: {
		IndexCookiesAllocated: bigint
		DataStorageCookiesAllocated: bigint
		SpecialCookiesAllocated: bigint
		ObjectsAllocated: bigint
		ObjectAllocationsFailure: bigint
		ObjectsAvailable: bigint
		ObjectsDead: bigint
		ObjectsWithoutCoherencyCheck: bigint
		ObjectsWithCoherencyCheck: bigint
		ObjectsNeedCoherencyCheckUpdate: bigint
		ObjectsDeclaredObsolete: bigint
		PagesMarkedAsBeingCached: bigint
		UncachePagesRequestSeen: bigint
		AcquireCookiesRequestSeen: bigint
		AcquireRequestsWithNullParent: bigint
		AcquireRequestsRejectedNoCacheAvailable: bigint
		AcquireRequestsSucceeded: bigint
		AcquireRequestsRejectedDueToError: bigint
		AcquireRequestsFailedDueToEnomem: bigint
		LookupsNumber: bigint
		LookupsNegative: bigint
		LookupsPositive: bigint
		ObjectsCreatedByLookup: bigint
		LookupsTimedOutAndRequed: bigint
		InvalidationsNumber: bigint
		InvalidationsRunning: bigint
		UpdateCookieRequestSeen: bigint
		UpdateRequestsWithNullParent: bigint
		UpdateRequestsRunning: bigint
		RelinquishCookiesRequestSeen: bigint
		RelinquishCookiesWithNullParent: bigint
		RelinquishRequestsWaitingCompleteCreation: bigint
		RelinquishRetries: bigint
		AttributeChangedRequestsSeen: bigint
		AttributeChangedRequestsQueued: bigint
		AttributeChangedRejectDueToEnobufs: bigint
		AttributeChangedFailedDueToEnomem: bigint
		AttributeChangedOps: bigint
		AllocationRequestsSeen: bigint
		AllocationOkRequests: bigint
		AllocationWaitingOnLookup: bigint
		AllocationsRejectedDueToEnobufs: bigint
		AllocationsAbortedDueToErestartsys: bigint
		AllocationOperationsSubmitted: bigint
		AllocationsWaitedForCPU: bigint
		AllocationsAbortedDueToObjectDeath: bigint
		RetrievalsReadRequests: bigint
		RetrievalsOk: bigint
		RetrievalsWaitingLookupCompletion: bigint
		RetrievalsReturnedEnodata: bigint
		RetrievalsRejectedDueToEnobufs: bigint
		RetrievalsAbortedDueToErestartsys: bigint
		RetrievalsFailedDueToEnomem: bigint
		RetrievalsRequests: bigint
		RetrievalsWaitingCPU: bigint
		RetrievalsAbortedDueToObjectDeath: bigint
		StoreWriteRequests: bigint
		StoreSuccessfulRequests: bigint
		StoreRequestsOnPendingStorage: bigint
		StoreRequestsRejectedDueToEnobufs: bigint
		StoreRequestsFailedDueToEnomem: bigint
		StoreRequestsSubmitted: bigint
		StoreRequestsRunning: bigint
		StorePagesWithRequestsProcessing: bigint
		StoreRequestsDeleted: bigint
		StoreRequestsOverStoreLimit: bigint
		ReleaseRequestsAgainstPagesWithNoPendingStorage: bigint
		ReleaseRequestsAgainstPagesStoredByTimeLockGranted: bigint
		ReleaseRequestsIgnoredDueToInProgressStore: bigint
		PageStoresCancelledByReleaseRequests: bigint
		VmscanWaiting: bigint
		OpsPending: bigint
		OpsRunning: bigint
		OpsEnqueued: bigint
		OpsCancelled: bigint
		OpsRejected: bigint
		OpsInitialised: bigint
		OpsDeferred: bigint
		OpsReleased: bigint
		OpsGarbageCollected: bigint
		CacheopAllocationsinProgress: bigint
		CacheopLookupObjectInProgress: bigint
		CacheopLookupCompleteInPorgress: bigint
		CacheopGrabObjectInProgress: bigint
		CacheopInvalidations: bigint
		CacheopUpdateObjectInProgress: bigint
		CacheopDropObjectInProgress: bigint
		CacheopPutObjectInProgress: bigint
		CacheopAttributeChangeInProgress: bigint
		CacheopSyncCacheInProgress: bigint
		CacheopReadOrAllocPageInProgress: bigint
		CacheopReadOrAllocPagesInProgress: bigint
		CacheopAllocatePageInProgress: bigint
		CacheopAllocatePagesInProgress: bigint
		CacheopWritePagesInProgress: bigint
		CacheopUncachePagesInProgress: bigint
		CacheopDissociatePagesInProgress: bigint
		CacheevLookupsAndCreationsRejectedLackSpace: bigint
		CacheevStaleObjectsDeleted: bigint
		CacheevRetiredWhenReliquished: bigint
		CacheevObjectsCulled: bigint
	}

	constructor(init?: Partial<{IndexCookiesAllocated?: bigint, DataStorageCookiesAllocated?: bigint, SpecialCookiesAllocated?: bigint, ObjectsAllocated?: bigint, ObjectAllocationsFailure?: bigint, ObjectsAvailable?: bigint, ObjectsDead?: bigint, ObjectsWithoutCoherencyCheck?: bigint, ObjectsWithCoherencyCheck?: bigint, ObjectsNeedCoherencyCheckUpdate?: bigint, ObjectsDeclaredObsolete?: bigint, PagesMarkedAsBeingCached?: bigint, UncachePagesRequestSeen?: bigint, AcquireCookiesRequestSeen?: bigint, AcquireRequestsWithNullParent?: bigint, AcquireRequestsRejectedNoCacheAvailable?: bigint, AcquireRequestsSucceeded?: bigint, AcquireRequestsRejectedDueToError?: bigint, AcquireRequestsFailedDueToEnomem?: bigint, LookupsNumber?: bigint, LookupsNegative?: bigint, LookupsPositive?: bigint, ObjectsCreatedByLookup?: bigint, LookupsTimedOutAndRequed?: bigint, InvalidationsNumber?: bigint, InvalidationsRunning?: bigint, UpdateCookieRequestSeen?: bigint, UpdateRequestsWithNullParent?: bigint, UpdateRequestsRunning?: bigint, RelinquishCookiesRequestSeen?: bigint, RelinquishCookiesWithNullParent?: bigint, RelinquishRequestsWaitingCompleteCreation?: bigint, RelinquishRetries?: bigint, AttributeChangedRequestsSeen?: bigint, AttributeChangedRequestsQueued?: bigint, AttributeChangedRejectDueToEnobufs?: bigint, AttributeChangedFailedDueToEnomem?: bigint, AttributeChangedOps?: bigint, AllocationRequestsSeen?: bigint, AllocationOkRequests?: bigint, AllocationWaitingOnLookup?: bigint, AllocationsRejectedDueToEnobufs?: bigint, AllocationsAbortedDueToErestartsys?: bigint, AllocationOperationsSubmitted?: bigint, AllocationsWaitedForCPU?: bigint, AllocationsAbortedDueToObjectDeath?: bigint, RetrievalsReadRequests?: bigint, RetrievalsOk?: bigint, RetrievalsWaitingLookupCompletion?: bigint, RetrievalsReturnedEnodata?: bigint, RetrievalsRejectedDueToEnobufs?: bigint, RetrievalsAbortedDueToErestartsys?: bigint, RetrievalsFailedDueToEnomem?: bigint, RetrievalsRequests?: bigint, RetrievalsWaitingCPU?: bigint, RetrievalsAbortedDueToObjectDeath?: bigint, StoreWriteRequests?: bigint, StoreSuccessfulRequests?: bigint, StoreRequestsOnPendingStorage?: bigint, StoreRequestsRejectedDueToEnobufs?: bigint, StoreRequestsFailedDueToEnomem?: bigint, StoreRequestsSubmitted?: bigint, StoreRequestsRunning?: bigint, StorePagesWithRequestsProcessing?: bigint, StoreRequestsDeleted?: bigint, StoreRequestsOverStoreLimit?: bigint, ReleaseRequestsAgainstPagesWithNoPendingStorage?: bigint, ReleaseRequestsAgainstPagesStoredByTimeLockGranted?: bigint, ReleaseRequestsIgnoredDueToInProgressStore?: bigint, PageStoresCancelledByReleaseRequests?: bigint, VmscanWaiting?: bigint, OpsPending?: bigint, OpsRunning?: bigint, OpsEnqueued?: bigint, OpsCancelled?: bigint, OpsRejected?: bigint, OpsInitialised?: bigint, OpsDeferred?: bigint, OpsReleased?: bigint, OpsGarbageCollected?: bigint, CacheopAllocationsinProgress?: bigint, CacheopLookupObjectInProgress?: bigint, CacheopLookupCompleteInPorgress?: bigint, CacheopGrabObjectInProgress?: bigint, CacheopInvalidations?: bigint, CacheopUpdateObjectInProgress?: bigint, CacheopDropObjectInProgress?: bigint, CacheopPutObjectInProgress?: bigint, CacheopAttributeChangeInProgress?: bigint, CacheopSyncCacheInProgress?: bigint, CacheopReadOrAllocPageInProgress?: bigint, CacheopReadOrAllocPagesInProgress?: bigint, CacheopAllocatePageInProgress?: bigint, CacheopAllocatePagesInProgress?: bigint, CacheopWritePagesInProgress?: bigint, CacheopUncachePagesInProgress?: bigint, CacheopDissociatePagesInProgress?: bigint, CacheevLookupsAndCreationsRejectedLackSpace?: bigint, CacheevStaleObjectsDeleted?: bigint, CacheevRetiredWhenReliquished?: bigint, CacheevObjectsCulled?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			IndexCookiesAllocated: init?.IndexCookiesAllocated ?? (0n as bigint),
			DataStorageCookiesAllocated: init?.DataStorageCookiesAllocated ?? (0n as bigint),
			SpecialCookiesAllocated: init?.SpecialCookiesAllocated ?? (0n as bigint),
			ObjectsAllocated: init?.ObjectsAllocated ?? (0n as bigint),
			ObjectAllocationsFailure: init?.ObjectAllocationsFailure ?? (0n as bigint),
			ObjectsAvailable: init?.ObjectsAvailable ?? (0n as bigint),
			ObjectsDead: init?.ObjectsDead ?? (0n as bigint),
			ObjectsWithoutCoherencyCheck: init?.ObjectsWithoutCoherencyCheck ?? (0n as bigint),
			ObjectsWithCoherencyCheck: init?.ObjectsWithCoherencyCheck ?? (0n as bigint),
			ObjectsNeedCoherencyCheckUpdate: init?.ObjectsNeedCoherencyCheckUpdate ?? (0n as bigint),
			ObjectsDeclaredObsolete: init?.ObjectsDeclaredObsolete ?? (0n as bigint),
			PagesMarkedAsBeingCached: init?.PagesMarkedAsBeingCached ?? (0n as bigint),
			UncachePagesRequestSeen: init?.UncachePagesRequestSeen ?? (0n as bigint),
			AcquireCookiesRequestSeen: init?.AcquireCookiesRequestSeen ?? (0n as bigint),
			AcquireRequestsWithNullParent: init?.AcquireRequestsWithNullParent ?? (0n as bigint),
			AcquireRequestsRejectedNoCacheAvailable: init?.AcquireRequestsRejectedNoCacheAvailable ?? (0n as bigint),
			AcquireRequestsSucceeded: init?.AcquireRequestsSucceeded ?? (0n as bigint),
			AcquireRequestsRejectedDueToError: init?.AcquireRequestsRejectedDueToError ?? (0n as bigint),
			AcquireRequestsFailedDueToEnomem: init?.AcquireRequestsFailedDueToEnomem ?? (0n as bigint),
			LookupsNumber: init?.LookupsNumber ?? (0n as bigint),
			LookupsNegative: init?.LookupsNegative ?? (0n as bigint),
			LookupsPositive: init?.LookupsPositive ?? (0n as bigint),
			ObjectsCreatedByLookup: init?.ObjectsCreatedByLookup ?? (0n as bigint),
			LookupsTimedOutAndRequed: init?.LookupsTimedOutAndRequed ?? (0n as bigint),
			InvalidationsNumber: init?.InvalidationsNumber ?? (0n as bigint),
			InvalidationsRunning: init?.InvalidationsRunning ?? (0n as bigint),
			UpdateCookieRequestSeen: init?.UpdateCookieRequestSeen ?? (0n as bigint),
			UpdateRequestsWithNullParent: init?.UpdateRequestsWithNullParent ?? (0n as bigint),
			UpdateRequestsRunning: init?.UpdateRequestsRunning ?? (0n as bigint),
			RelinquishCookiesRequestSeen: init?.RelinquishCookiesRequestSeen ?? (0n as bigint),
			RelinquishCookiesWithNullParent: init?.RelinquishCookiesWithNullParent ?? (0n as bigint),
			RelinquishRequestsWaitingCompleteCreation: init?.RelinquishRequestsWaitingCompleteCreation ?? (0n as bigint),
			RelinquishRetries: init?.RelinquishRetries ?? (0n as bigint),
			AttributeChangedRequestsSeen: init?.AttributeChangedRequestsSeen ?? (0n as bigint),
			AttributeChangedRequestsQueued: init?.AttributeChangedRequestsQueued ?? (0n as bigint),
			AttributeChangedRejectDueToEnobufs: init?.AttributeChangedRejectDueToEnobufs ?? (0n as bigint),
			AttributeChangedFailedDueToEnomem: init?.AttributeChangedFailedDueToEnomem ?? (0n as bigint),
			AttributeChangedOps: init?.AttributeChangedOps ?? (0n as bigint),
			AllocationRequestsSeen: init?.AllocationRequestsSeen ?? (0n as bigint),
			AllocationOkRequests: init?.AllocationOkRequests ?? (0n as bigint),
			AllocationWaitingOnLookup: init?.AllocationWaitingOnLookup ?? (0n as bigint),
			AllocationsRejectedDueToEnobufs: init?.AllocationsRejectedDueToEnobufs ?? (0n as bigint),
			AllocationsAbortedDueToErestartsys: init?.AllocationsAbortedDueToErestartsys ?? (0n as bigint),
			AllocationOperationsSubmitted: init?.AllocationOperationsSubmitted ?? (0n as bigint),
			AllocationsWaitedForCPU: init?.AllocationsWaitedForCPU ?? (0n as bigint),
			AllocationsAbortedDueToObjectDeath: init?.AllocationsAbortedDueToObjectDeath ?? (0n as bigint),
			RetrievalsReadRequests: init?.RetrievalsReadRequests ?? (0n as bigint),
			RetrievalsOk: init?.RetrievalsOk ?? (0n as bigint),
			RetrievalsWaitingLookupCompletion: init?.RetrievalsWaitingLookupCompletion ?? (0n as bigint),
			RetrievalsReturnedEnodata: init?.RetrievalsReturnedEnodata ?? (0n as bigint),
			RetrievalsRejectedDueToEnobufs: init?.RetrievalsRejectedDueToEnobufs ?? (0n as bigint),
			RetrievalsAbortedDueToErestartsys: init?.RetrievalsAbortedDueToErestartsys ?? (0n as bigint),
			RetrievalsFailedDueToEnomem: init?.RetrievalsFailedDueToEnomem ?? (0n as bigint),
			RetrievalsRequests: init?.RetrievalsRequests ?? (0n as bigint),
			RetrievalsWaitingCPU: init?.RetrievalsWaitingCPU ?? (0n as bigint),
			RetrievalsAbortedDueToObjectDeath: init?.RetrievalsAbortedDueToObjectDeath ?? (0n as bigint),
			StoreWriteRequests: init?.StoreWriteRequests ?? (0n as bigint),
			StoreSuccessfulRequests: init?.StoreSuccessfulRequests ?? (0n as bigint),
			StoreRequestsOnPendingStorage: init?.StoreRequestsOnPendingStorage ?? (0n as bigint),
			StoreRequestsRejectedDueToEnobufs: init?.StoreRequestsRejectedDueToEnobufs ?? (0n as bigint),
			StoreRequestsFailedDueToEnomem: init?.StoreRequestsFailedDueToEnomem ?? (0n as bigint),
			StoreRequestsSubmitted: init?.StoreRequestsSubmitted ?? (0n as bigint),
			StoreRequestsRunning: init?.StoreRequestsRunning ?? (0n as bigint),
			StorePagesWithRequestsProcessing: init?.StorePagesWithRequestsProcessing ?? (0n as bigint),
			StoreRequestsDeleted: init?.StoreRequestsDeleted ?? (0n as bigint),
			StoreRequestsOverStoreLimit: init?.StoreRequestsOverStoreLimit ?? (0n as bigint),
			ReleaseRequestsAgainstPagesWithNoPendingStorage: init?.ReleaseRequestsAgainstPagesWithNoPendingStorage ?? (0n as bigint),
			ReleaseRequestsAgainstPagesStoredByTimeLockGranted: init?.ReleaseRequestsAgainstPagesStoredByTimeLockGranted ?? (0n as bigint),
			ReleaseRequestsIgnoredDueToInProgressStore: init?.ReleaseRequestsIgnoredDueToInProgressStore ?? (0n as bigint),
			PageStoresCancelledByReleaseRequests: init?.PageStoresCancelledByReleaseRequests ?? (0n as bigint),
			VmscanWaiting: init?.VmscanWaiting ?? (0n as bigint),
			OpsPending: init?.OpsPending ?? (0n as bigint),
			OpsRunning: init?.OpsRunning ?? (0n as bigint),
			OpsEnqueued: init?.OpsEnqueued ?? (0n as bigint),
			OpsCancelled: init?.OpsCancelled ?? (0n as bigint),
			OpsRejected: init?.OpsRejected ?? (0n as bigint),
			OpsInitialised: init?.OpsInitialised ?? (0n as bigint),
			OpsDeferred: init?.OpsDeferred ?? (0n as bigint),
			OpsReleased: init?.OpsReleased ?? (0n as bigint),
			OpsGarbageCollected: init?.OpsGarbageCollected ?? (0n as bigint),
			CacheopAllocationsinProgress: init?.CacheopAllocationsinProgress ?? (0n as bigint),
			CacheopLookupObjectInProgress: init?.CacheopLookupObjectInProgress ?? (0n as bigint),
			CacheopLookupCompleteInPorgress: init?.CacheopLookupCompleteInPorgress ?? (0n as bigint),
			CacheopGrabObjectInProgress: init?.CacheopGrabObjectInProgress ?? (0n as bigint),
			CacheopInvalidations: init?.CacheopInvalidations ?? (0n as bigint),
			CacheopUpdateObjectInProgress: init?.CacheopUpdateObjectInProgress ?? (0n as bigint),
			CacheopDropObjectInProgress: init?.CacheopDropObjectInProgress ?? (0n as bigint),
			CacheopPutObjectInProgress: init?.CacheopPutObjectInProgress ?? (0n as bigint),
			CacheopAttributeChangeInProgress: init?.CacheopAttributeChangeInProgress ?? (0n as bigint),
			CacheopSyncCacheInProgress: init?.CacheopSyncCacheInProgress ?? (0n as bigint),
			CacheopReadOrAllocPageInProgress: init?.CacheopReadOrAllocPageInProgress ?? (0n as bigint),
			CacheopReadOrAllocPagesInProgress: init?.CacheopReadOrAllocPagesInProgress ?? (0n as bigint),
			CacheopAllocatePageInProgress: init?.CacheopAllocatePageInProgress ?? (0n as bigint),
			CacheopAllocatePagesInProgress: init?.CacheopAllocatePagesInProgress ?? (0n as bigint),
			CacheopWritePagesInProgress: init?.CacheopWritePagesInProgress ?? (0n as bigint),
			CacheopUncachePagesInProgress: init?.CacheopUncachePagesInProgress ?? (0n as bigint),
			CacheopDissociatePagesInProgress: init?.CacheopDissociatePagesInProgress ?? (0n as bigint),
			CacheevLookupsAndCreationsRejectedLackSpace: init?.CacheevLookupsAndCreationsRejectedLackSpace ?? (0n as bigint),
			CacheevStaleObjectsDeleted: init?.CacheevStaleObjectsDeleted ?? (0n as bigint),
			CacheevRetiredWhenReliquished: init?.CacheevRetiredWhenReliquished ?? (0n as bigint),
			CacheevObjectsCulled: init?.CacheevObjectsCulled ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Fscacheinfo {
		return new Fscacheinfo(this, true)
	}

	public __goscriptAssign(source: Fscacheinfo): void {
		const target = this._fields
		const values = source._fields
		target.IndexCookiesAllocated = values.IndexCookiesAllocated
		target.DataStorageCookiesAllocated = values.DataStorageCookiesAllocated
		target.SpecialCookiesAllocated = values.SpecialCookiesAllocated
		target.ObjectsAllocated = values.ObjectsAllocated
		target.ObjectAllocationsFailure = values.ObjectAllocationsFailure
		target.ObjectsAvailable = values.ObjectsAvailable
		target.ObjectsDead = values.ObjectsDead
		target.ObjectsWithoutCoherencyCheck = values.ObjectsWithoutCoherencyCheck
		target.ObjectsWithCoherencyCheck = values.ObjectsWithCoherencyCheck
		target.ObjectsNeedCoherencyCheckUpdate = values.ObjectsNeedCoherencyCheckUpdate
		target.ObjectsDeclaredObsolete = values.ObjectsDeclaredObsolete
		target.PagesMarkedAsBeingCached = values.PagesMarkedAsBeingCached
		target.UncachePagesRequestSeen = values.UncachePagesRequestSeen
		target.AcquireCookiesRequestSeen = values.AcquireCookiesRequestSeen
		target.AcquireRequestsWithNullParent = values.AcquireRequestsWithNullParent
		target.AcquireRequestsRejectedNoCacheAvailable = values.AcquireRequestsRejectedNoCacheAvailable
		target.AcquireRequestsSucceeded = values.AcquireRequestsSucceeded
		target.AcquireRequestsRejectedDueToError = values.AcquireRequestsRejectedDueToError
		target.AcquireRequestsFailedDueToEnomem = values.AcquireRequestsFailedDueToEnomem
		target.LookupsNumber = values.LookupsNumber
		target.LookupsNegative = values.LookupsNegative
		target.LookupsPositive = values.LookupsPositive
		target.ObjectsCreatedByLookup = values.ObjectsCreatedByLookup
		target.LookupsTimedOutAndRequed = values.LookupsTimedOutAndRequed
		target.InvalidationsNumber = values.InvalidationsNumber
		target.InvalidationsRunning = values.InvalidationsRunning
		target.UpdateCookieRequestSeen = values.UpdateCookieRequestSeen
		target.UpdateRequestsWithNullParent = values.UpdateRequestsWithNullParent
		target.UpdateRequestsRunning = values.UpdateRequestsRunning
		target.RelinquishCookiesRequestSeen = values.RelinquishCookiesRequestSeen
		target.RelinquishCookiesWithNullParent = values.RelinquishCookiesWithNullParent
		target.RelinquishRequestsWaitingCompleteCreation = values.RelinquishRequestsWaitingCompleteCreation
		target.RelinquishRetries = values.RelinquishRetries
		target.AttributeChangedRequestsSeen = values.AttributeChangedRequestsSeen
		target.AttributeChangedRequestsQueued = values.AttributeChangedRequestsQueued
		target.AttributeChangedRejectDueToEnobufs = values.AttributeChangedRejectDueToEnobufs
		target.AttributeChangedFailedDueToEnomem = values.AttributeChangedFailedDueToEnomem
		target.AttributeChangedOps = values.AttributeChangedOps
		target.AllocationRequestsSeen = values.AllocationRequestsSeen
		target.AllocationOkRequests = values.AllocationOkRequests
		target.AllocationWaitingOnLookup = values.AllocationWaitingOnLookup
		target.AllocationsRejectedDueToEnobufs = values.AllocationsRejectedDueToEnobufs
		target.AllocationsAbortedDueToErestartsys = values.AllocationsAbortedDueToErestartsys
		target.AllocationOperationsSubmitted = values.AllocationOperationsSubmitted
		target.AllocationsWaitedForCPU = values.AllocationsWaitedForCPU
		target.AllocationsAbortedDueToObjectDeath = values.AllocationsAbortedDueToObjectDeath
		target.RetrievalsReadRequests = values.RetrievalsReadRequests
		target.RetrievalsOk = values.RetrievalsOk
		target.RetrievalsWaitingLookupCompletion = values.RetrievalsWaitingLookupCompletion
		target.RetrievalsReturnedEnodata = values.RetrievalsReturnedEnodata
		target.RetrievalsRejectedDueToEnobufs = values.RetrievalsRejectedDueToEnobufs
		target.RetrievalsAbortedDueToErestartsys = values.RetrievalsAbortedDueToErestartsys
		target.RetrievalsFailedDueToEnomem = values.RetrievalsFailedDueToEnomem
		target.RetrievalsRequests = values.RetrievalsRequests
		target.RetrievalsWaitingCPU = values.RetrievalsWaitingCPU
		target.RetrievalsAbortedDueToObjectDeath = values.RetrievalsAbortedDueToObjectDeath
		target.StoreWriteRequests = values.StoreWriteRequests
		target.StoreSuccessfulRequests = values.StoreSuccessfulRequests
		target.StoreRequestsOnPendingStorage = values.StoreRequestsOnPendingStorage
		target.StoreRequestsRejectedDueToEnobufs = values.StoreRequestsRejectedDueToEnobufs
		target.StoreRequestsFailedDueToEnomem = values.StoreRequestsFailedDueToEnomem
		target.StoreRequestsSubmitted = values.StoreRequestsSubmitted
		target.StoreRequestsRunning = values.StoreRequestsRunning
		target.StorePagesWithRequestsProcessing = values.StorePagesWithRequestsProcessing
		target.StoreRequestsDeleted = values.StoreRequestsDeleted
		target.StoreRequestsOverStoreLimit = values.StoreRequestsOverStoreLimit
		target.ReleaseRequestsAgainstPagesWithNoPendingStorage = values.ReleaseRequestsAgainstPagesWithNoPendingStorage
		target.ReleaseRequestsAgainstPagesStoredByTimeLockGranted = values.ReleaseRequestsAgainstPagesStoredByTimeLockGranted
		target.ReleaseRequestsIgnoredDueToInProgressStore = values.ReleaseRequestsIgnoredDueToInProgressStore
		target.PageStoresCancelledByReleaseRequests = values.PageStoresCancelledByReleaseRequests
		target.VmscanWaiting = values.VmscanWaiting
		target.OpsPending = values.OpsPending
		target.OpsRunning = values.OpsRunning
		target.OpsEnqueued = values.OpsEnqueued
		target.OpsCancelled = values.OpsCancelled
		target.OpsRejected = values.OpsRejected
		target.OpsInitialised = values.OpsInitialised
		target.OpsDeferred = values.OpsDeferred
		target.OpsReleased = values.OpsReleased
		target.OpsGarbageCollected = values.OpsGarbageCollected
		target.CacheopAllocationsinProgress = values.CacheopAllocationsinProgress
		target.CacheopLookupObjectInProgress = values.CacheopLookupObjectInProgress
		target.CacheopLookupCompleteInPorgress = values.CacheopLookupCompleteInPorgress
		target.CacheopGrabObjectInProgress = values.CacheopGrabObjectInProgress
		target.CacheopInvalidations = values.CacheopInvalidations
		target.CacheopUpdateObjectInProgress = values.CacheopUpdateObjectInProgress
		target.CacheopDropObjectInProgress = values.CacheopDropObjectInProgress
		target.CacheopPutObjectInProgress = values.CacheopPutObjectInProgress
		target.CacheopAttributeChangeInProgress = values.CacheopAttributeChangeInProgress
		target.CacheopSyncCacheInProgress = values.CacheopSyncCacheInProgress
		target.CacheopReadOrAllocPageInProgress = values.CacheopReadOrAllocPageInProgress
		target.CacheopReadOrAllocPagesInProgress = values.CacheopReadOrAllocPagesInProgress
		target.CacheopAllocatePageInProgress = values.CacheopAllocatePageInProgress
		target.CacheopAllocatePagesInProgress = values.CacheopAllocatePagesInProgress
		target.CacheopWritePagesInProgress = values.CacheopWritePagesInProgress
		target.CacheopUncachePagesInProgress = values.CacheopUncachePagesInProgress
		target.CacheopDissociatePagesInProgress = values.CacheopDissociatePagesInProgress
		target.CacheevLookupsAndCreationsRejectedLackSpace = values.CacheevLookupsAndCreationsRejectedLackSpace
		target.CacheevStaleObjectsDeleted = values.CacheevStaleObjectsDeleted
		target.CacheevRetiredWhenReliquished = values.CacheevRetiredWhenReliquished
		target.CacheevObjectsCulled = values.CacheevObjectsCulled
	}

	static __typeInfo = $.registerStructType(
		"procfs.Fscacheinfo",
		() => new Fscacheinfo(),
		() => [],
		Fscacheinfo,
		() => [/* @__PURE__ */ $.structField("IndexCookiesAllocated", /* @__PURE__ */ $.basicType("uint64"), [0], 0, true), /* @__PURE__ */ $.structField("DataStorageCookiesAllocated", /* @__PURE__ */ $.basicType("uint64"), [1], 8, true), /* @__PURE__ */ $.structField("SpecialCookiesAllocated", /* @__PURE__ */ $.basicType("uint64"), [2], 16, true), /* @__PURE__ */ $.structField("ObjectsAllocated", /* @__PURE__ */ $.basicType("uint64"), [3], 24, true), /* @__PURE__ */ $.structField("ObjectAllocationsFailure", /* @__PURE__ */ $.basicType("uint64"), [4], 32, true), /* @__PURE__ */ $.structField("ObjectsAvailable", /* @__PURE__ */ $.basicType("uint64"), [5], 40, true), /* @__PURE__ */ $.structField("ObjectsDead", /* @__PURE__ */ $.basicType("uint64"), [6], 48, true), /* @__PURE__ */ $.structField("ObjectsWithoutCoherencyCheck", /* @__PURE__ */ $.basicType("uint64"), [7], 56, true), /* @__PURE__ */ $.structField("ObjectsWithCoherencyCheck", /* @__PURE__ */ $.basicType("uint64"), [8], 64, true), /* @__PURE__ */ $.structField("ObjectsNeedCoherencyCheckUpdate", /* @__PURE__ */ $.basicType("uint64"), [9], 72, true), /* @__PURE__ */ $.structField("ObjectsDeclaredObsolete", /* @__PURE__ */ $.basicType("uint64"), [10], 80, true), /* @__PURE__ */ $.structField("PagesMarkedAsBeingCached", /* @__PURE__ */ $.basicType("uint64"), [11], 88, true), /* @__PURE__ */ $.structField("UncachePagesRequestSeen", /* @__PURE__ */ $.basicType("uint64"), [12], 96, true), /* @__PURE__ */ $.structField("AcquireCookiesRequestSeen", /* @__PURE__ */ $.basicType("uint64"), [13], 104, true), /* @__PURE__ */ $.structField("AcquireRequestsWithNullParent", /* @__PURE__ */ $.basicType("uint64"), [14], 112, true), /* @__PURE__ */ $.structField("AcquireRequestsRejectedNoCacheAvailable", /* @__PURE__ */ $.basicType("uint64"), [15], 120, true), /* @__PURE__ */ $.structField("AcquireRequestsSucceeded", /* @__PURE__ */ $.basicType("uint64"), [16], 128, true), /* @__PURE__ */ $.structField("AcquireRequestsRejectedDueToError", /* @__PURE__ */ $.basicType("uint64"), [17], 136, true), /* @__PURE__ */ $.structField("AcquireRequestsFailedDueToEnomem", /* @__PURE__ */ $.basicType("uint64"), [18], 144, true), /* @__PURE__ */ $.structField("LookupsNumber", /* @__PURE__ */ $.basicType("uint64"), [19], 152, true), /* @__PURE__ */ $.structField("LookupsNegative", /* @__PURE__ */ $.basicType("uint64"), [20], 160, true), /* @__PURE__ */ $.structField("LookupsPositive", /* @__PURE__ */ $.basicType("uint64"), [21], 168, true), /* @__PURE__ */ $.structField("ObjectsCreatedByLookup", /* @__PURE__ */ $.basicType("uint64"), [22], 176, true), /* @__PURE__ */ $.structField("LookupsTimedOutAndRequed", /* @__PURE__ */ $.basicType("uint64"), [23], 184, true), /* @__PURE__ */ $.structField("InvalidationsNumber", /* @__PURE__ */ $.basicType("uint64"), [24], 192, true), /* @__PURE__ */ $.structField("InvalidationsRunning", /* @__PURE__ */ $.basicType("uint64"), [25], 200, true), /* @__PURE__ */ $.structField("UpdateCookieRequestSeen", /* @__PURE__ */ $.basicType("uint64"), [26], 208, true), /* @__PURE__ */ $.structField("UpdateRequestsWithNullParent", /* @__PURE__ */ $.basicType("uint64"), [27], 216, true), /* @__PURE__ */ $.structField("UpdateRequestsRunning", /* @__PURE__ */ $.basicType("uint64"), [28], 224, true), /* @__PURE__ */ $.structField("RelinquishCookiesRequestSeen", /* @__PURE__ */ $.basicType("uint64"), [29], 232, true), /* @__PURE__ */ $.structField("RelinquishCookiesWithNullParent", /* @__PURE__ */ $.basicType("uint64"), [30], 240, true), /* @__PURE__ */ $.structField("RelinquishRequestsWaitingCompleteCreation", /* @__PURE__ */ $.basicType("uint64"), [31], 248, true), /* @__PURE__ */ $.structField("RelinquishRetries", /* @__PURE__ */ $.basicType("uint64"), [32], 256, true), /* @__PURE__ */ $.structField("AttributeChangedRequestsSeen", /* @__PURE__ */ $.basicType("uint64"), [33], 264, true), /* @__PURE__ */ $.structField("AttributeChangedRequestsQueued", /* @__PURE__ */ $.basicType("uint64"), [34], 272, true), /* @__PURE__ */ $.structField("AttributeChangedRejectDueToEnobufs", /* @__PURE__ */ $.basicType("uint64"), [35], 280, true), /* @__PURE__ */ $.structField("AttributeChangedFailedDueToEnomem", /* @__PURE__ */ $.basicType("uint64"), [36], 288, true), /* @__PURE__ */ $.structField("AttributeChangedOps", /* @__PURE__ */ $.basicType("uint64"), [37], 296, true), /* @__PURE__ */ $.structField("AllocationRequestsSeen", /* @__PURE__ */ $.basicType("uint64"), [38], 304, true), /* @__PURE__ */ $.structField("AllocationOkRequests", /* @__PURE__ */ $.basicType("uint64"), [39], 312, true), /* @__PURE__ */ $.structField("AllocationWaitingOnLookup", /* @__PURE__ */ $.basicType("uint64"), [40], 320, true), /* @__PURE__ */ $.structField("AllocationsRejectedDueToEnobufs", /* @__PURE__ */ $.basicType("uint64"), [41], 328, true), /* @__PURE__ */ $.structField("AllocationsAbortedDueToErestartsys", /* @__PURE__ */ $.basicType("uint64"), [42], 336, true), /* @__PURE__ */ $.structField("AllocationOperationsSubmitted", /* @__PURE__ */ $.basicType("uint64"), [43], 344, true), /* @__PURE__ */ $.structField("AllocationsWaitedForCPU", /* @__PURE__ */ $.basicType("uint64"), [44], 352, true), /* @__PURE__ */ $.structField("AllocationsAbortedDueToObjectDeath", /* @__PURE__ */ $.basicType("uint64"), [45], 360, true), /* @__PURE__ */ $.structField("RetrievalsReadRequests", /* @__PURE__ */ $.basicType("uint64"), [46], 368, true), /* @__PURE__ */ $.structField("RetrievalsOk", /* @__PURE__ */ $.basicType("uint64"), [47], 376, true), /* @__PURE__ */ $.structField("RetrievalsWaitingLookupCompletion", /* @__PURE__ */ $.basicType("uint64"), [48], 384, true), /* @__PURE__ */ $.structField("RetrievalsReturnedEnodata", /* @__PURE__ */ $.basicType("uint64"), [49], 392, true), /* @__PURE__ */ $.structField("RetrievalsRejectedDueToEnobufs", /* @__PURE__ */ $.basicType("uint64"), [50], 400, true), /* @__PURE__ */ $.structField("RetrievalsAbortedDueToErestartsys", /* @__PURE__ */ $.basicType("uint64"), [51], 408, true), /* @__PURE__ */ $.structField("RetrievalsFailedDueToEnomem", /* @__PURE__ */ $.basicType("uint64"), [52], 416, true), /* @__PURE__ */ $.structField("RetrievalsRequests", /* @__PURE__ */ $.basicType("uint64"), [53], 424, true), /* @__PURE__ */ $.structField("RetrievalsWaitingCPU", /* @__PURE__ */ $.basicType("uint64"), [54], 432, true), /* @__PURE__ */ $.structField("RetrievalsAbortedDueToObjectDeath", /* @__PURE__ */ $.basicType("uint64"), [55], 440, true), /* @__PURE__ */ $.structField("StoreWriteRequests", /* @__PURE__ */ $.basicType("uint64"), [56], 448, true), /* @__PURE__ */ $.structField("StoreSuccessfulRequests", /* @__PURE__ */ $.basicType("uint64"), [57], 456, true), /* @__PURE__ */ $.structField("StoreRequestsOnPendingStorage", /* @__PURE__ */ $.basicType("uint64"), [58], 464, true), /* @__PURE__ */ $.structField("StoreRequestsRejectedDueToEnobufs", /* @__PURE__ */ $.basicType("uint64"), [59], 472, true), /* @__PURE__ */ $.structField("StoreRequestsFailedDueToEnomem", /* @__PURE__ */ $.basicType("uint64"), [60], 480, true), /* @__PURE__ */ $.structField("StoreRequestsSubmitted", /* @__PURE__ */ $.basicType("uint64"), [61], 488, true), /* @__PURE__ */ $.structField("StoreRequestsRunning", /* @__PURE__ */ $.basicType("uint64"), [62], 496, true), /* @__PURE__ */ $.structField("StorePagesWithRequestsProcessing", /* @__PURE__ */ $.basicType("uint64"), [63], 504, true), /* @__PURE__ */ $.structField("StoreRequestsDeleted", /* @__PURE__ */ $.basicType("uint64"), [64], 512, true), /* @__PURE__ */ $.structField("StoreRequestsOverStoreLimit", /* @__PURE__ */ $.basicType("uint64"), [65], 520, true), /* @__PURE__ */ $.structField("ReleaseRequestsAgainstPagesWithNoPendingStorage", /* @__PURE__ */ $.basicType("uint64"), [66], 528, true), /* @__PURE__ */ $.structField("ReleaseRequestsAgainstPagesStoredByTimeLockGranted", /* @__PURE__ */ $.basicType("uint64"), [67], 536, true), /* @__PURE__ */ $.structField("ReleaseRequestsIgnoredDueToInProgressStore", /* @__PURE__ */ $.basicType("uint64"), [68], 544, true), /* @__PURE__ */ $.structField("PageStoresCancelledByReleaseRequests", /* @__PURE__ */ $.basicType("uint64"), [69], 552, true), /* @__PURE__ */ $.structField("VmscanWaiting", /* @__PURE__ */ $.basicType("uint64"), [70], 560, true), /* @__PURE__ */ $.structField("OpsPending", /* @__PURE__ */ $.basicType("uint64"), [71], 568, true), /* @__PURE__ */ $.structField("OpsRunning", /* @__PURE__ */ $.basicType("uint64"), [72], 576, true), /* @__PURE__ */ $.structField("OpsEnqueued", /* @__PURE__ */ $.basicType("uint64"), [73], 584, true), /* @__PURE__ */ $.structField("OpsCancelled", /* @__PURE__ */ $.basicType("uint64"), [74], 592, true), /* @__PURE__ */ $.structField("OpsRejected", /* @__PURE__ */ $.basicType("uint64"), [75], 600, true), /* @__PURE__ */ $.structField("OpsInitialised", /* @__PURE__ */ $.basicType("uint64"), [76], 608, true), /* @__PURE__ */ $.structField("OpsDeferred", /* @__PURE__ */ $.basicType("uint64"), [77], 616, true), /* @__PURE__ */ $.structField("OpsReleased", /* @__PURE__ */ $.basicType("uint64"), [78], 624, true), /* @__PURE__ */ $.structField("OpsGarbageCollected", /* @__PURE__ */ $.basicType("uint64"), [79], 632, true), /* @__PURE__ */ $.structField("CacheopAllocationsinProgress", /* @__PURE__ */ $.basicType("uint64"), [80], 640, true), /* @__PURE__ */ $.structField("CacheopLookupObjectInProgress", /* @__PURE__ */ $.basicType("uint64"), [81], 648, true), /* @__PURE__ */ $.structField("CacheopLookupCompleteInPorgress", /* @__PURE__ */ $.basicType("uint64"), [82], 656, true), /* @__PURE__ */ $.structField("CacheopGrabObjectInProgress", /* @__PURE__ */ $.basicType("uint64"), [83], 664, true), /* @__PURE__ */ $.structField("CacheopInvalidations", /* @__PURE__ */ $.basicType("uint64"), [84], 672, true), /* @__PURE__ */ $.structField("CacheopUpdateObjectInProgress", /* @__PURE__ */ $.basicType("uint64"), [85], 680, true), /* @__PURE__ */ $.structField("CacheopDropObjectInProgress", /* @__PURE__ */ $.basicType("uint64"), [86], 688, true), /* @__PURE__ */ $.structField("CacheopPutObjectInProgress", /* @__PURE__ */ $.basicType("uint64"), [87], 696, true), /* @__PURE__ */ $.structField("CacheopAttributeChangeInProgress", /* @__PURE__ */ $.basicType("uint64"), [88], 704, true), /* @__PURE__ */ $.structField("CacheopSyncCacheInProgress", /* @__PURE__ */ $.basicType("uint64"), [89], 712, true), /* @__PURE__ */ $.structField("CacheopReadOrAllocPageInProgress", /* @__PURE__ */ $.basicType("uint64"), [90], 720, true), /* @__PURE__ */ $.structField("CacheopReadOrAllocPagesInProgress", /* @__PURE__ */ $.basicType("uint64"), [91], 728, true), /* @__PURE__ */ $.structField("CacheopAllocatePageInProgress", /* @__PURE__ */ $.basicType("uint64"), [92], 736, true), /* @__PURE__ */ $.structField("CacheopAllocatePagesInProgress", /* @__PURE__ */ $.basicType("uint64"), [93], 744, true), /* @__PURE__ */ $.structField("CacheopWritePagesInProgress", /* @__PURE__ */ $.basicType("uint64"), [94], 752, true), /* @__PURE__ */ $.structField("CacheopUncachePagesInProgress", /* @__PURE__ */ $.basicType("uint64"), [95], 760, true), /* @__PURE__ */ $.structField("CacheopDissociatePagesInProgress", /* @__PURE__ */ $.basicType("uint64"), [96], 768, true), /* @__PURE__ */ $.structField("CacheevLookupsAndCreationsRejectedLackSpace", /* @__PURE__ */ $.basicType("uint64"), [97], 776, true), /* @__PURE__ */ $.structField("CacheevStaleObjectsDeleted", /* @__PURE__ */ $.basicType("uint64"), [98], 784, true), /* @__PURE__ */ $.structField("CacheevRetiredWhenReliquished", /* @__PURE__ */ $.basicType("uint64"), [99], 792, true), /* @__PURE__ */ $.structField("CacheevObjectsCulled", /* @__PURE__ */ $.basicType("uint64"), [100], 800, true)]
	)
}

export function setFSCacheFields(fields: $.Slice<string>, setFields: $.Slice<$.VarRef<bigint> | null>): $.GoError {
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(fields) < $.sliceLen(setFields)) {
		return fmt.Errorf("Insufficient number of fields, expected %v, got %v", $.basicInterfaceValue($.sliceLen(setFields), "int"), $.basicInterfaceValue($.sliceLen(fields), "int"))
	}

	for (let __goscriptRangeTarget0 = setFields, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(fields), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let __goscriptTuple0: any = strconv.ParseUint($.arrayIndex(strings.Split(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as string), "=")!, 1), 0, 64);
		;((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as $.VarRef<bigint> | null)!.value = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
	}
	return null
}

export async function parseFscacheinfo(r: io.Reader | null): globalThis.Promise<[Fscacheinfo | $.VarRef<Fscacheinfo> | null, $.GoError]> {
	let m: $.VarRef<Fscacheinfo> = $.varRef(new Fscacheinfo(undefined, true))
	let s: bufio.Scanner | $.VarRef<bufio.Scanner> | null = bufio.NewScanner(r)
	while (await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Scan() : bufio.Scanner.prototype.Scan.call(s))) {
		let fields: $.Slice<string> = strings.Fields((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))
		if ($.sliceLen(fields) < 2) {
			return [null, fmt.Errorf("malformed Fscacheinfo line: %q", (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as bufio.Scanner).Text() : bufio.Scanner.prototype.Text.call(s)))]
		}

		switch ($.arrayIndex(fields!, 0)) {
			case "Cookies:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "IndexCookiesAllocated"), $.fieldRef(m.value._fields, "DataStorageCookiesAllocated"), $.fieldRef(m.value._fields, "SpecialCookiesAllocated")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Objects:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "ObjectsAllocated"), $.fieldRef(m.value._fields, "ObjectAllocationsFailure"), $.fieldRef(m.value._fields, "ObjectsAvailable"), $.fieldRef(m.value._fields, "ObjectsDead")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "ChkAux":
			{
				let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "ObjectsWithoutCoherencyCheck"), $.fieldRef(m.value._fields, "ObjectsWithCoherencyCheck"), $.fieldRef(m.value._fields, "ObjectsNeedCoherencyCheckUpdate"), $.fieldRef(m.value._fields, "ObjectsDeclaredObsolete")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Pages":
			{
				let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "PagesMarkedAsBeingCached"), $.fieldRef(m.value._fields, "UncachePagesRequestSeen")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Acquire:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "AcquireCookiesRequestSeen"), $.fieldRef(m.value._fields, "AcquireRequestsWithNullParent"), $.fieldRef(m.value._fields, "AcquireRequestsRejectedNoCacheAvailable"), $.fieldRef(m.value._fields, "AcquireRequestsSucceeded"), $.fieldRef(m.value._fields, "AcquireRequestsRejectedDueToError"), $.fieldRef(m.value._fields, "AcquireRequestsFailedDueToEnomem")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Lookups:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "LookupsNumber"), $.fieldRef(m.value._fields, "LookupsNegative"), $.fieldRef(m.value._fields, "LookupsPositive"), $.fieldRef(m.value._fields, "ObjectsCreatedByLookup"), $.fieldRef(m.value._fields, "LookupsTimedOutAndRequed")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Invals":
			{
				let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "InvalidationsNumber"), $.fieldRef(m.value._fields, "InvalidationsRunning")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Updates:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "UpdateCookieRequestSeen"), $.fieldRef(m.value._fields, "UpdateRequestsWithNullParent"), $.fieldRef(m.value._fields, "UpdateRequestsRunning")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Relinqs:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "RelinquishCookiesRequestSeen"), $.fieldRef(m.value._fields, "RelinquishCookiesWithNullParent"), $.fieldRef(m.value._fields, "RelinquishRequestsWaitingCompleteCreation"), $.fieldRef(m.value._fields, "RelinquishRetries")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "AttrChg:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "AttributeChangedRequestsSeen"), $.fieldRef(m.value._fields, "AttributeChangedRequestsQueued"), $.fieldRef(m.value._fields, "AttributeChangedRejectDueToEnobufs"), $.fieldRef(m.value._fields, "AttributeChangedFailedDueToEnomem"), $.fieldRef(m.value._fields, "AttributeChangedOps")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Allocs":
			{
				if ($.stringEqual($.arrayIndex(strings.Split($.arrayIndex(fields!, 2), "=")!, 0), "n")) {
					let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "AllocationRequestsSeen"), $.fieldRef(m.value._fields, "AllocationOkRequests"), $.fieldRef(m.value._fields, "AllocationWaitingOnLookup"), $.fieldRef(m.value._fields, "AllocationsRejectedDueToEnobufs"), $.fieldRef(m.value._fields, "AllocationsAbortedDueToErestartsys")]))
					if (err != null) {
						return [m, err]
					}
				} else {
					let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "AllocationOperationsSubmitted"), $.fieldRef(m.value._fields, "AllocationsWaitedForCPU"), $.fieldRef(m.value._fields, "AllocationsAbortedDueToObjectDeath")]))
					if (err != null) {
						return [m, err]
					}
				}
				break
			}
			case "Retrvls:":
			{
				if ($.stringEqual($.arrayIndex(strings.Split($.arrayIndex(fields!, 1), "=")!, 0), "n")) {
					let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "RetrievalsReadRequests"), $.fieldRef(m.value._fields, "RetrievalsOk"), $.fieldRef(m.value._fields, "RetrievalsWaitingLookupCompletion"), $.fieldRef(m.value._fields, "RetrievalsReturnedEnodata"), $.fieldRef(m.value._fields, "RetrievalsRejectedDueToEnobufs"), $.fieldRef(m.value._fields, "RetrievalsAbortedDueToErestartsys"), $.fieldRef(m.value._fields, "RetrievalsFailedDueToEnomem")]))
					if (err != null) {
						return [m, err]
					}
				} else {
					let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "RetrievalsRequests"), $.fieldRef(m.value._fields, "RetrievalsWaitingCPU"), $.fieldRef(m.value._fields, "RetrievalsAbortedDueToObjectDeath")]))
					if (err != null) {
						return [m, err]
					}
				}
				break
			}
			case "Stores":
			{
				if ($.stringEqual($.arrayIndex(strings.Split($.arrayIndex(fields!, 2), "=")!, 0), "n")) {
					let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "StoreWriteRequests"), $.fieldRef(m.value._fields, "StoreSuccessfulRequests"), $.fieldRef(m.value._fields, "StoreRequestsOnPendingStorage"), $.fieldRef(m.value._fields, "StoreRequestsRejectedDueToEnobufs"), $.fieldRef(m.value._fields, "StoreRequestsFailedDueToEnomem")]))
					if (err != null) {
						return [m, err]
					}
				} else {
					let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "StoreRequestsSubmitted"), $.fieldRef(m.value._fields, "StoreRequestsRunning"), $.fieldRef(m.value._fields, "StorePagesWithRequestsProcessing"), $.fieldRef(m.value._fields, "StoreRequestsDeleted"), $.fieldRef(m.value._fields, "StoreRequestsOverStoreLimit")]))
					if (err != null) {
						return [m, err]
					}
				}
				break
			}
			case "VmScan":
			{
				let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "ReleaseRequestsAgainstPagesWithNoPendingStorage"), $.fieldRef(m.value._fields, "ReleaseRequestsAgainstPagesStoredByTimeLockGranted"), $.fieldRef(m.value._fields, "ReleaseRequestsIgnoredDueToInProgressStore"), $.fieldRef(m.value._fields, "PageStoresCancelledByReleaseRequests"), $.fieldRef(m.value._fields, "VmscanWaiting")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
			case "Ops":
			{
				if ($.stringEqual($.arrayIndex(strings.Split($.arrayIndex(fields!, 2), "=")!, 0), "pend")) {
					let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "OpsPending"), $.fieldRef(m.value._fields, "OpsRunning"), $.fieldRef(m.value._fields, "OpsEnqueued"), $.fieldRef(m.value._fields, "OpsCancelled"), $.fieldRef(m.value._fields, "OpsRejected")]))
					if (err != null) {
						return [m, err]
					}
				} else {
					let err = setFSCacheFields($.goSlice(fields, 2, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "OpsInitialised"), $.fieldRef(m.value._fields, "OpsDeferred"), $.fieldRef(m.value._fields, "OpsReleased"), $.fieldRef(m.value._fields, "OpsGarbageCollected")]))
					if (err != null) {
						return [m, err]
					}
				}
				break
			}
			case "CacheOp:":
			{
				if ($.stringEqual($.arrayIndex(strings.Split($.arrayIndex(fields!, 1), "=")!, 0), "alo")) {
					let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "CacheopAllocationsinProgress"), $.fieldRef(m.value._fields, "CacheopLookupObjectInProgress"), $.fieldRef(m.value._fields, "CacheopLookupCompleteInPorgress"), $.fieldRef(m.value._fields, "CacheopGrabObjectInProgress")]))
					if (err != null) {
						return [m, err]
					}
				} else {
					if ($.stringEqual($.arrayIndex(strings.Split($.arrayIndex(fields!, 1), "=")!, 0), "inv")) {
						let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "CacheopInvalidations"), $.fieldRef(m.value._fields, "CacheopUpdateObjectInProgress"), $.fieldRef(m.value._fields, "CacheopDropObjectInProgress"), $.fieldRef(m.value._fields, "CacheopPutObjectInProgress"), $.fieldRef(m.value._fields, "CacheopAttributeChangeInProgress"), $.fieldRef(m.value._fields, "CacheopSyncCacheInProgress")]))
						if (err != null) {
							return [m, err]
						}
					} else {
						let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "CacheopReadOrAllocPageInProgress"), $.fieldRef(m.value._fields, "CacheopReadOrAllocPagesInProgress"), $.fieldRef(m.value._fields, "CacheopAllocatePageInProgress"), $.fieldRef(m.value._fields, "CacheopAllocatePagesInProgress"), $.fieldRef(m.value._fields, "CacheopWritePagesInProgress"), $.fieldRef(m.value._fields, "CacheopUncachePagesInProgress"), $.fieldRef(m.value._fields, "CacheopDissociatePagesInProgress")]))
						if (err != null) {
							return [m, err]
						}
					}
				}
				break
			}
			case "CacheEv:":
			{
				let err = setFSCacheFields($.goSlice(fields, 1, undefined), $.arrayToSlice<$.VarRef<bigint> | null>([$.fieldRef(m.value._fields, "CacheevLookupsAndCreationsRejectedLackSpace"), $.fieldRef(m.value._fields, "CacheevStaleObjectsDeleted"), $.fieldRef(m.value._fields, "CacheevRetiredWhenReliquished"), $.fieldRef(m.value._fields, "CacheevObjectsCulled")]))
				if (err != null) {
					return [m, err]
				}
				break
			}
		}
	}

	return [m, null]
}
